// 사용자 정의 타입 가드
//  타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법


type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}


type Person = {
  name: string;
  age: number;
}

const person: Person = {
  name: "이정환",
  age : 27
};

interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
}

interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void; 
  sayHi: (a: number, b: number) => void; // ❌
}

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}