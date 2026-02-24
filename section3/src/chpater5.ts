// 타입 추론
// let a = 10;
// number 타입으로 추론

// 타입 추론 불가능
// function func(param){ // 오류

// }
// 그리고 이렇게 타입 추론이 불가능한 변수
// (ex 매개변수)에는 암시적으로 any 타입이 추론됩니다. 
//  (tsconfig.json의 strict 옵션을 true로 설정)에서는 
// 이런 암시적 any 타입의 추론을 오류로 판단하게 됩니다.


let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

// 구조 분해 할당
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 반환값
// function func() {
//   return "hello";
// }
// 반환값이 string 타입으로 추론된다


// 기본값이 설정된 매개변수
function func(message = "hello") {
  return "hello";
}



// 암시적으로 any 타입으로 추론
// 변수를 선언할때 초기값을 생략하면 암시적인 any 타입으로 추론
// let d;
// 암시적인 any 타입으로 추론

//그리고 이 변수에 값을 할당하면 그 다음 라인부터 any 타입이 
// 해당 값의 타입으로 변화
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed(); // 오류 


// const 상수의 추론
// const로 선언된 상수도 타입 추론이
const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

//  최적 공통 타입(Best Common Type)
let arr = [1, "string"];
// (string | number)[] 타입으로 추론