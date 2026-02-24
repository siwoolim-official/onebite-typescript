// 함수 타입 표현식
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 함수 타입 표현식은 다음과 같이 여러개의 함수가 
// 동일한 타입을 갖는 경우에 요긴하게 사용됩니다.

// const add = (a: number, b: number) => a + b;
// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;

// type Operation = (a: number, b: number) => number;

// const add: Operation = (a, b) => a + b;
// const sub: Operation = (a, b) => a - b;
// const multiply: Operation = (a, b) => a * b;
// const divide: Operation = (a, b) => a / b;

// const add: (a: number, b: number) => number = (a, b) => a + b;


// 호출 시그니쳐
// 호출 시그니쳐(Call Signature)는 함수 타입 표현식과 
// 동일하게 함수의 타입을 별도로 정의하는 방식

// type Operation2 = {
//   (a: number, b: number): number;
// };

// const add2: Operation2 = (a, b) => a + b;
// const sub2: Operation2 = (a, b) => a - b;
// const multiply2: Operation2 = (a, b) => a * b;
// const divide2: Operation2 = (a, b) => a / b;

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;

add2(1, 2);
add2.name = 'ㅁ'

