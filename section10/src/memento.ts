type EditorState = {
    content: String;
    cursorPosition: Number;
}

class HistoryManager<T> {
    private undoStack: T[] = [];
    private redoStack: T[] = [];

    // OOM 방지를 위한 최대 스택 크기 제한
    private readonly MAX_HISTORY_LIMIT = 50;

    // 상태 저장
    public push(currentState: T): void {
        // 최신 표준인
        const snapshot = structuredClone(currentState)

        this.undoStack.push(snapshot);

        // 새로운 작업이 발생하면 기존 미래(redo)는 소멸
        this.redoStack = [];

        // 스택 크기 제한
        if (this.undoStack.length > this.MAX_HISTORY_LIMIT) {
            this.undoStack.shift() // 배열의 첫 요소 제거
        } 
    }

    public undo(currentState: T): T | null {
        if (this.undoStack.length === 0) { // 더 이상 되돌릴 과거 정보가 없음.
            return null;
        }

        // 현재 상태를 Redo 스택에 깊은 복사
        this.redoStack.push(structuredClone(currentState))


        // undo 스택에 가장 최근의 과거를 꺼내어 반환
        return this.undoStack.pop() || null;
    }

    public redo(currentState: T): T | null {
        if (this.redoStack.length === 0) {  // 더 이상 다시 실행할 미래가 없습니다.
            return null;
        }

        // 현재 상태를 다시 undo 스택에 보관
        this.undoStack.push(structuredClone(currentState))

        // Redo 스택에서 미래를 꺼내어 반환
        return this.redoStack.pop() || null;
    }
}
    // 작업 테스트
    const manager = new HistoryManager<EditorState>();
    let state: EditorState = {content: "", cursorPosition: 0 } as EditorState

    // 작업1: "A" 상태를 저장
    manager.push(state);
    state = { content: "A", cursorPosition: 1 };
    console.log("작업1 현재 상태: ", state.content) // "A"

    // 작업2: "B" 상태를 저장
    manager.push(state);
    state = { content: "AB", cursorPosition: 2 };
    console.log("작업2 현재 상태: ", state.content) // "AB"

    // 작업3: "C" 상태를 저장
    manager.push(state);
    state = { content: "ABC", cursorPosition: 3 };
    console.log("작업3 현재 상태: ", state.content) // "ABC"

    // 실행 취소 테스트
    let previousState: EditorState | null = null;

    // 실행 취소 Undo 1회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 1회 상태: ", state.content) // "AB"

    // 실행 취소 Undo 2회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 2회 상태: ", state.content) // "A"

    // 실행 취소 Undo 3회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 3회 상태: ", state.content) // ""

    // 실행 취소 Undo 4회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 4회 상태: ", state.content) // ""

    // 실행 취소 Undo 5회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 5회 상태: ", state.content) // ""

    // 실행 복구 테스트
    let nextState: EditorState | null = {} as EditorState

    // 실행 복구 Redo 1회
    nextState = manager.redo(state);
    if (nextState) state = nextState
    console.log("Redo 1회 상태: ", state.content) // "A"

    // 실행 복구 Redo 2회
    nextState = manager.redo(state);
    if (nextState) state = nextState
    console.log("Redo 2회 상태: ", state.content) // "AB"

    // 실행 복구 Redo 3회
    nextState = manager.redo(state);
    if (nextState) state = nextState
    console.log("Redo 3회 상태: ", state.content) // "ABC"

    // 실행 취소 Undo 6회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 6회 상태: ", state.content) // "AB"

    // 실행 취소 Undo 7회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 7회 상태: ", state.content) // "A"

    // 작업4: "D" 상태를 저장
    manager.push(state);
    state = { content: "AD", cursorPosition: 4 };
    console.log("작업4 현재 상태: ", state.content) // "AD"

    // 실행 복구 Redo 4회
    nextState = manager.redo(state);
    if (nextState) state = nextState
    console.log("Redo 4회 상태: ", state.content) // "AD"

    // 작업5: "E" 상태를 저장
    manager.push(state);
    state = { content: "ADE", cursorPosition: 4 };
    console.log("작업5 현재 상태: ", state.content) // "ADE"

    // 실행 복구 Redo 5회
    nextState = manager.redo(state);
    if (nextState) state = nextState
    console.log("Redo 5회 상태: ", state.content) // "ADE"

    // 실행 취소 Undo 6회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 6회 상태: ", state.content) // "AD"

    // 실행 취소 Undo 7회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 7회 상태: ", state.content) // "A"

    // 실행 취소 Undo 8회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 8회 상태: ", state.content) // ""

    // 실행 취소 Undo 9회
    previousState = manager.undo(state);
    if (previousState) state = previousState;
    console.log("Undo 9회 상태: ", state.content) // ""