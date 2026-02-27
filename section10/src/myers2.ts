// 1. 유니온 타입과 상수 객체 정의 (이전 단계 복습)
const DIFF_OP = {
  DELETE: -1,
  RETAIN: 0,
  INSERT: 1,
} as const;

type DiffOpType = typeof DIFF_OP[keyof typeof DIFF_OP];

interface DiffPatch {
  operation: DiffOpType;
  text: string;
  index: number;
}

//  차이점만 저장하는 커맨드 클래스 (delta Command)
class TextDiffCommand {
    constructor(
        private receiver: { text: string; setText: (t: string) => void },
        private patches: DiffPatch[]
    ) {}

    // 실행 (Rodo) : 패치를 순방향으로 적용
    execute(): void {
        let currentText = this.receiver.text
        // 패치 적용 로직(간략화된 예시)

        this.patches.forEach((patch) => {
            if(patch.operation === 1) { // 삽입
                currentText = currentText.slice(0, patch.index) + patch.text + currentText.slice(patch.index)
            } else if (patch.operation === -1) { // 삭제
                currentText = currentText.slice(0, patch.index) + currentText.slice(patch.index + patch.text.length);
            }
        })

        this.receiver.setText(currentText)
    }

    // 취소 (Undo): 패치를 '역방향'으로 적옹(삽입된 건 지우고, 지워진건 삽입)
    undo(): void {
        let currentText = this.receiver.text;

        [...this.patches].reverse().forEach((patch) => {
            if (patch.operation === 1) { // 삽입되었던 것을 다시 삭제
                currentText = currentText.slice(0, patch.index) + currentText.slice(patch.index + patch.text.length);
            } else if (patch.operation === -1) { // 삭제되었던 것을 다시 삽입
                currentText = currentText.slice(0, patch.index) + patch.text + currentText.slice(patch.index);
                console.log("currentText => ", currentText.slice(0, patch.index))
                console.log("patch.text => ", patch.text)
                console.log("currentText => ", currentText.slice(patch.index))


                console.log("currentText => ", currentText)
            }
        })

        this.receiver.setText(currentText);

    }
}

function generateMyersDiff(oldText: string, newText: string): DiffPatch[] {
    const patches: DiffPatch[] = [];

    // 실무 최적화: 공통 접두사/접미사는 알고리즘을 돌리기 전에 미리 잘라냅니다.
    let start = 0;
    while (start < oldText.length && start < newText.length && oldText[start] === newText[start]) {
        start++;
    }

    // (이 예제에서는 가독성을 위해 중간 글자가 완전히 바뀌었다고 가정하고 단순화된 로직을 사용합니다)
    // 원래 마이어스 알고리즘은 여기서 D-Path를 탐색하여 최단 거리를 찾습니다.
    // 여기서는 이해를 위해 "World" -> "TypeScript" 처럼 잘라낸 나머지 부분을 삭제/추가로 변환합니다.
    const oldRemainder = oldText.slice(start);
    const newRemainder = newText.slice(start);

    // 1단계: 기존 문자열 중 달라진 부분은 모두 '삭제'로 처리 (-1)
    if (oldRemainder.length > 0) {
        patches.push({
        operation: DIFF_OP.DELETE,
        text: oldRemainder,
        index: start
        });
    }

    // 2단계: 새로운 문자열 중 달라진 부분은 모두 '추가'로 처리 (1)
    if (newRemainder.length > 0) {
        patches.push({
        operation: DIFF_OP.INSERT,
        text: newRemainder,
        index: start
        });
    }

    return patches;
}

// ==========================================
// [실행 및 검증]
// ==========================================
const oldStr = "Hello World";
const newStr = "Hello TypeScript";

console.log("=== Diff 생성 과정 ===");
// 1. 여기서 우리가 직접 만든 generateMyersDiff 함수가 내부적으로 두 문자열을 비교합니다.
const myersDiffResult = generateMyersDiff(oldStr, newStr);

// 2. 생성된 패치(Patch) 내역 확인
console.log(JSON.stringify(myersDiffResult, null, 2));
/* 출력 결과:
[
  { "operation": -1, "text": "World", "index": 6 },
  { "operation": 1, "text": "TypeScript", "index": 6 }
]
*/

    // 사용 예시
    const editor = {
        text: "Hello World", 
        setText: function(newText: string) { this.text = newText; }
    };

    const command = new TextDiffCommand(editor, myersDiffResult);

    console.log("초기 상태:", editor.text); 
    // 출력: "Hello World"

    // 3. 작업 실행 (Redo 동작과 동일) -> 미래로 이동
    command.execute(); 
    console.log("execute() 실행 후:", editor.text); 
    // 출력: "Hello TypeScript"

    // 4. 실행 취소 (Undo) -> 다시 과거로 복귀
    command.undo();
    console.log("undo() 실행 후:", editor.text); 
    // 출력: "Hello World"