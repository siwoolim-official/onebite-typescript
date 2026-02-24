// 열거형
// 타입스크립트에서만 사용할 수 있는 특별한 타입
// enum Role {
//   ADMIN,
//   USER,
//   GUEST,
// }

// 숫자형 enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "이정환",
//   role: Role.ADMIN, //관리자
// };

// const user2 = {
//   name: "홍길동",
//   role: Role.USER, // 회원
// };

// const user3 = {
//   name: "아무개",
//   role: Role.GUEST, // 게스트
// };



// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum Role {
//   ADMIN, // 0 할당(자동)
//   USER,  // 1 할당(자동)
//   GUEST, // 2 할당(자동)
// }

// const user1 = {
//   name: "이정환",
//   role: Role.ADMIN, // 0
// };

// const user2 = {
//   name: "홍길동",
//   role: Role.USER, // 1
// };

// const user3 = {
//   name: "아무개",
//   role: Role.GUEST, // 2
// };

// // enum 타입
// // 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum Role {
//   ADMIN = 10, // 10 할당 
//   USER,       // 11 할당(자동)
//   GUEST,      // 12 할당(자동)
// }

// const user1 = {
//   name: "이정환",
//   role: Role.ADMIN, // 10
// };

// const user2 = {
//   name: "홍길동",
//   role: Role.USER, // 11
// };

// const user3 = {
//   name: "아무개",
//   role: Role.GUEST, // 12
// };

// 문자형 enum 타입
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.korean,// "ko"
};

// enum은 컴파일 결과 객체가 된다.
// enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환됩니다. 
// 따라서 우리가 위에서 했던 것 처럼 값으로 사용할 수 있는 것 입니다.