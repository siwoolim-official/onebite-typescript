// 객체
// let user = {
//   id: 1,
//   name: "이정환",
// };

// let user2: object = {
//   id: 1,
//   name: "이정환",
// };


// user.id
// user2.id // 에러 발생

// 객체 리터럴 타입
// let user3: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "이정환",
// };

// user.id;

// let dog = {
//   name: "돌돌이",
//   color: "brown",
// };


// let dog2: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "brown",
// };


let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// 에러 발생, id가 없는 유저
// user = {
//   name: "홍길동", // 오류 발생!
// };

// 선택적 프로퍼티(Optional Property)
let user2: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user2 = {
  name: "홍길동",
};

// 읽기전용 프로퍼티(Readonly Property)
let user3: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

user2.name = "dskfd"
// user3.name = "dskfd"; // 오류 발생
