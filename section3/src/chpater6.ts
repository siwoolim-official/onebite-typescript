// 타입 단언

type Person = {
  name: string;
  age: number;
};

// let person: Person = {};
// person.name = "";
// person.age = 23;

let person = {} as Person;
person.name = "";
person.age = 23; 

// 이렇듯  값 as 타입 으로 특정 값을 원하는 타입으로 단언
// 초과 프로퍼티 검사를 피할때에도 요긴하게 사용
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog


// 타입 단언의 조건
// 값 as 타입 형식의 단언식을 A as B로 표현
// A가 B의 슈퍼타입이다
// A가 B의 서브타입이다
let num1 = 10 as never;   // ✅
let num2 = 10 as unknown; // ✅

// let num3 = 10 as string;  // ❌

// 다중단언
// 타입 단언은 다중으로도 가능
let num3 = 10 as unknown as string;
// 중간에 값을 unknown 타입으로 단언하면 unknown 타입은 모든 
// 타입의 슈퍼타입이므로 모든 타입으로 또 다시 단언하는게 가능

// const 단언
// 타입 단언때에만 사용할 수 있는 const 타입
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

// Non Null 단언
// Non Null 단언은 지금까지 살펴본 값 as 타입 형태를 따르지 않는 단언입니다. 
// 값 뒤에 느낌표(!)
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;