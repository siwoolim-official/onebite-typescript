interface Person {
  name: string;
  age: number;
  location?: string; // 추가
}

// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }


// const person: Person = {
//   name: "이정환",
//   age: 27,
//   location: "ko"
// };



const person = {
  name: "이정환",
  age: 27,
  location: "ko"
};

// type Person = typeof person;
// 결과
// {name: string, age: number, location:string}



function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
//   name: "이정환",
//   age: 27,
// };