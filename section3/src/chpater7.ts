// 타입 좁히기

// function func(value: number | string) { }

// number | string 이므로 함수 내부에서 다음과 같이 value가 number 타입이거나 
// string 타입일 것으로 기대하고 메서드를 사용하려고 하면 오류가 발생
// function func(value: number | string) {
//   value.toFixed() // 오류
// 	value.toUpperCase() // 오류
// }

// 만약 value가 number 타입일거라고 기대하고 toFixed 메서드를 사용하고 싶다
// value의 타입이 number 타입임을 보장
// function func(value: number | string) {
//   if (typeof value === "number") {
//     console.log(value.toFixed());
//   }
// }


// function func(value: number | string) {
//   if (typeof value === "number") {
//     console.log(value.toFixed());
//   } else if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   }
// }

// instanceof 타입가드
// stanceof를 이용한 내장 클래스 타입을 보장할 수 있는 타입가드
// function func(value: number | string | Date | null) {
//   if (typeof value === "number") {
//     console.log(value.toFixed());
//   } else if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (value instanceof Date) {
//     console.log(value.getTime());
//   }
// }

// Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산
// 따라서 우리가 직접 만든 타입과 함께 사용할 수 없음

// in 타입 가드
// 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자 사용\
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`)
  }
}