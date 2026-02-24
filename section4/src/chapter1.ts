// 함수의 타입을 정의하는 방법

function func(a: number, b: number): number {
  return a + b;
}

// 참고로 함수의 반환값 타입은 자동으로 추론되기 때문에 다음과 같이 생략 가능
// function func(a: number, b: number) {
//   return a + b;
// }


// 화살표 함수 타입 정의하기
// 화살표 함수의 타입 정의 방식
const add = (a: number, b: number): number => a + b;

// 반환값의 타입은 자동으로 추론
// const add = (a: number, b: number) => a + b;

// 매개변수 기본값 설정하기
// function introduce(name = "이정환") {
// 	console.log(`name : ${name}`);
// }

// 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류
// function introduce(name:number = "이정환") {
// 	console.log(`name : ${name}`);
// }

// 선택적 매개변수 설정하기
// function introduce(name = "이정환", tall?: number) {
//   console.log(`name : ${name}`);
//   console.log(`tall : ${tall}`);
// }

// introduce("이정환", 156);

// introduce("이정환");

// 택적 매개변수의 타입은 자동으로 undefined와 유니온 된 타입으로 추론
// tall의 타입은 현재 number | undefined
// 타입 좁히기가 필요
// function introduce(name = "이정환", tall?: number) {
//   console.log(`name : ${name}`);
//   if (typeof tall === "number") {
//     console.log(`tall : ${tall + 10}`);
//   }
// }

// 오류: 필수 매개변수 앞에 올 수 없음.

// function introduce(name = "이정환", tall?: number, age: number) {
// 	// 오류!
//   console.log(`name : ${name}`);
//   if (typeof tall === "number") {
//     console.log(`tall : ${tall + 10}`);
//   }
// }

// 나머지 매개변수
// 다음과 같이 여러개의 숫자를 인수로 받는 함수가 있다고 가정하겠습니다.

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3, 4)


// // 튜플 타입을 이용
// function getSum(...rest: [number, number, number]) {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// }

// getSum(1, 2, 3)    // ✅
// getSum(1, 2, 3, 4) // ❌

