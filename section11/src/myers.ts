// 차이 데이터를 정의하는 타입
type DiffOperation = 'INSERT' | 'DELETE' | 'RETAIN';

interface DiffPatch {
    operation: DiffOperation;
    text: string;
    index: number; // 변경이 발생한 시작위치
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
            if(patch.operation === 'INSERT') { // 삽입
                currentText = currentText.slice(0, patch.index) + patch.text + currentText.slice(patch.index)
            } else if (patch.operation === 'DELETE') { // 삭제
                currentText = currentText.slice(0, patch.index) + currentText.slice(patch.index + patch.text.length);
            }
        })

        this.receiver.setText(currentText)
    }

    // 취소 (Undo): 패치를 '역방향'으로 적옹(삽입된 건 지우고, 지워진건 삽입)
    undo(): void {
        let currentText = this.receiver.text;

        [...this.patches].reverse().forEach((patch) => {
            if (patch.operation === 'INSERT') { // 삽입되었던 것을 다시 삭제
                currentText = currentText.slice(0, patch.index) + currentText.slice(patch.index + patch.text.length);
            } else if (patch.operation === 'DELETE') { // 삭제되었던 것을 다시 삽입
                currentText = currentText.slice(0, patch.index) + patch.text + currentText.slice(patch.index);
            }
        })

        this.receiver.setText(currentText);

    }
}

    // 사용 예시
    const editor = {
        text: "Hello World",
        setText: function(newText: string) { this.text = newText }
    };

    // Hello World -> Hello TypeScript로 변경
    // 마이어스 알고리즘 라이브러리가 Diff 패치 생성
    const myersDiffResult: DiffPatch[] = [
        { operation: "DELETE", text: "World", index: 6 },      // 'World' 삭제
        { operation: "INSERT", text: "TypeScript", index: 6 }   // 'TypeScript' 추가
    ];

    const Command = new TextDiffCommand(editor, myersDiffResult);

    Command.undo();
    console.log(editor.text);

    Command.execute();
    console.log(editor.text);
