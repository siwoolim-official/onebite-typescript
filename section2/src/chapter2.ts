export {};

// 배열과 튜플
let numArr: number[] = [1, 2, 3]

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// let multiArr = [1, "hello"];

// 유니온(Union) 타입
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입
let doubleArr : number[][] = [
  [1, 2, 3], 
  [4, 5],
];


// 튜플
// 길이와 타입이 고정된 배열을
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플은 결국 배열입니다. push, pop 가능
let tup3: [number, number] = [1, 2];

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 튜플 사용 이유
const users = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];

const users2 = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // <- 새로 추가함
];