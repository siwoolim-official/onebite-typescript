// 대수타입
// 대수 타입이란 여러개의 타입을 합성해서 만드는 타입을 말합니다

// 대수 타입에는 합집합 타입과 교집합 타입이 존재합니다. 
// 합집합은 Union 타입, 교집합은 Intersection 타입


// 합집합 타입 - Union 타입
// let a: string | number;

// a = 1;
// a = "hello";

// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

// Union 타입으로 배열 타입 정의하기
let arr: (number | string | boolean)[] = [1, "hello", true];

// Union 타입과 객체 타입
// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person;

let union1: Union1 = { // ✅
  name: "",
  color: "",
};

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};


// let union4: Union1 = { // ❌
//   name: "",
// };

// 교집합(Intersection) 타입
let variable: number & string; 
// never 타입으로 추론된다
// 대다수의 기본 타입들 간에는 서로 공유하는 교집합이 없기 때문에 
// 이런 인터섹션 타입은 보통 객체 타입들에 자주 사용됩니다. 

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

// let intersection2: Intersection = { // ❌
//   name: "",
//   color: "",
// };
