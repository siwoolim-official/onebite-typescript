

// 객체 타입의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // ✅ OK
// num2 = num1; // ❌ NO


// 다. 모든 객체 타입은 각각 다른 객체 타입들과 슈퍼-서브 타입 관계를 갖습니다. 
// 따라서 업 캐스팅은 허용하고 다운 캐스팅은 허용하지 않음
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO


// 초과 프로퍼티 검사
// 초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 
// 타입스크립트의 특수한 기능입니다. 
// 이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 
// 객체를 변수에 할당할 수 없도록 막습니다.
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

// let book2: Book = { // 오류 발생
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",
// };

// 초과 프로퍼티 검사는 함수의 매개변수에도 동일하게 발생합니다.
function func(book: Book) {}

// func({ // 오류 발생
//   name: "한 입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",
// });