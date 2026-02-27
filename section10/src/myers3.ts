// 타입 및 상수 정의
const DIFF_OP = { DELETE: -1, RETAIN: 0, INSERT: 1 } as const;
type DiffOpType = typeof DIFF_OP[keyof typeof DIFF_OP];

interface DiffPatch {
    operation: DiffOpType;
    text: string;
    index: number;
}

// Diff 생성 함수
function generateMyersDiff(oldText: string, newText: string): DiffPatch[] {
    const patches: DiffPatch[] = [];
    let start = 0;
    while (start < oldText.length && start < newText.length && oldText[start] === newText[start]) {
        start++;
    }
    const oldRemainder = oldText.slice(start);
    const newRemainder = newText.slice(start);

    if (oldRemainder.length > 0) patches.push({ operation: DIFF_OP.DELETE, text: oldRemainder, index: start });
    if (newRemainder.length > 0) patches.push({ operation: DIFF_OP.INSERT, text: newRemainder, index: start });
    
    return patches;
}

// 커맨드 클래스
class TextDiffCommand {
    constructor(
        private receiver: { text: string; setText: (t: string) => void },
        private patches: DiffPatch[]
    ) {}

    execute(): void {
        let currentText = this.receiver.text;
        this.patches.forEach((patch) => {
            if (patch.operation === DIFF_OP.INSERT) {
                currentText = currentText.slice(0, patch.index) + patch.text + currentText.slice(patch.index);
            } else if (patch.operation === DIFF_OP.DELETE) {
                currentText = currentText.slice(0, patch.index) + currentText.slice(patch.index + patch.text.length);
            }
        });
        this.receiver.setText(currentText);
    }

    undo(): void {
        let currentText = this.receiver.text;
        [...this.patches].reverse().forEach((patch) => {
            if (patch.operation === DIFF_OP.INSERT) {
                currentText = currentText.slice(0, patch.index) + currentText.slice(patch.index + patch.text.length);
            } else if (patch.operation === DIFF_OP.DELETE) {
                currentText = currentText.slice(0, patch.index) + patch.text + currentText.slice(patch.index);
            }
        });
        this.receiver.setText(currentText);
    }
}

// 마이어스 HistoryManager
class CommandManager {
    private undoStack: TextDiffCommand[] = [];
    private redoStack: TextDiffCommand[] = [];

    // 새로운 텍스트가 입력되었을 때 호출
    public executeCommand(command: TextDiffCommand): void {
        command.execute(); // 차이점 적용
        this.undoStack.push(command); // 실행한 커맨드를 스택에 보관
        console.log("this.undoStack => ", this.undoStack)
        this.redoStack = []; // 새로운 작업 시 미래(Redo)는 파기 (메멘토와 동일한 규칙)
    }

    public undo(): void {
        const command = this.undoStack.pop();
        if (command) {
            command.undo(); // 패치 내역을 역연산하여 텍스트 복구
            this.redoStack.push(command);
            console.log("this.redoStack => ", this.undoStack)
        }
    }

    public redo(): void {
        const command = this.redoStack.pop();
        if (command) {
            command.execute(); // 패치 내역을 다시 순방향 적용
            this.undoStack.push(command);
            console.log("this.undoStack => ", this.undoStack)
        }
    }

    public showUndoStack(): void {

    }

    public showRedoStack(): void {
        
    }
}

// 실행 및 검증
// 에디터 초기화
const editor = {
    text: "",
    setText: function(newText: string) { this.text = newText; }
};

const manager = new CommandManager();

// 글자를 치는 행위
function typeText(newText: string) {
    const diff = generateMyersDiff(editor.text, newText); // 현재와 새로운 텍스트의 차이 계산
    console.log("diff => ", diff)
    const command = new TextDiffCommand(editor, diff);    // 차이점만 담은 커맨드 생성
    console.log("command => ", command)
    manager.executeCommand(command);                      // 매니저를 통해 실행 및 스택 저장
}

console.log("--- 작업 시작 ---");

console.log("작업1: A 입력")
typeText("A");
console.log("작업1 현재 상태: ", editor.text); // "A"

console.log("작업1: B 입력")
typeText("AB");
console.log("작업2 현재 상태: ", editor.text); // "AB"

console.log("작업1: C 입력")
typeText("ABC");
console.log("작업3 현재 상태: ", editor.text); // "ABC"

// console.log("\n--- 실행 취소 (Undo) 테스트 ---");

// manager.undo();
// console.log("Undo 1회 상태: ", editor.text); // "AB"

// manager.undo();
// console.log("Undo 2회 상태: ", editor.text); // "A"

// manager.undo();
// console.log("Undo 3회 상태: ", editor.text); // ""

// console.log("\n--- 실행 복구 (Redo) 테스트 ---");

// manager.redo();
// console.log("Redo 1회 상태: ", editor.text); // "A"

// manager.redo();
// console.log("Redo 2회 상태: ", editor.text); // "AB"

// console.log("\n--- 과거로 돌아간 후 새로운 분기(작업) 타기 ---");

// // 현재 "AB" 상태에서 새로운 글자 "AD"를 만듦
// typeText("AD");
// // 내부 동작: diff("AB", "AD")가 실행됨 -> 'B' 삭제, 'D' 추가 커맨드가 생성됨
// console.log("작업4 (새로운 분기) 현재 상태: ", editor.text); // "AD"

// // 여기서 Redo를 누르면? (기존의 "ABC"로 가는 미래는 파기되었으므로 아무 일도 일어나지 않아야 함)
// manager.redo();
// console.log("분기 후 Redo 시도 상태: ", editor.text); // "AD" (변함 없음)

// manager.undo();
// console.log("다시 Undo 상태: ", editor.text); // "AB"