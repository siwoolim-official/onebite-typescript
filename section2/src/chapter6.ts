// any 타입
// let anyVar1 = 10;
// anyVar1 = "hello"; // 오류 발생!

// let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};

// anyVar.toUpperCase();
// anyVar.toFixed();
// anyVar.a;


// any는 최대한 사용하지 마세요
// 우리가 아까 작성한 다음과 같은 코드를 컴파일 하거나 ts-node로 실행해보면 런타임 오류가 발생합니다.
// let anyVar: any = 10;
// anyVar = "hello";

// let num: number = 10;
// num = anyVar;


// Unknown 타입
// nknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장
// let unknownVar: unknown;

// unknownVar = "";
// unknownVar = 1;
// unknownVar = () => {};

// 그러나 반대로는 안됩니다. unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습
let num: number = 10;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; // 오류 !

// 또 unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없습니다.
// 만약 위와 같이 unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면 다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 합니다.
if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}

