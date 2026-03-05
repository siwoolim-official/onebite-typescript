// Exclude<T, K>
// Exclude 타입은 다음과 같이 T로부터 U를 제거하는 타입입니다.
type A = Exclude<string | boolean, string>;
// boolean

type Exlcude<T, U> = T extends U ? never : T;

// Extract<T, K>
// Extract 타입은 다음과 같이 T로 부터 U를 추출하는 타입입니다
type B = Extract<string | boolean, boolean>;

type Extract<T, U> = T extends U ? T : never;


// ReturnType<T>
// type ReturnType<T> = T extends () => infer R ? R : never;


// type ReturnType<T extends (...args: any) => any> = T extends (
//   ...agrs: any
// ) => infer R
//   ? R
//   : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number

// 1. 다른 개발자가 작성한(또는 외부 라이브러리의) 함수
function getUserSession(sessionId: string) {
  // 복잡한 로직을 거쳐 객체를 반환한다고 가정합니다.
  return {
    id: 123,
    username: "senior_dev",
    roles: ["admin", "user"],
    lastLogin: new Date()
  };
}

// TypeScript 내부에 구현된 ReturnType의 실제 모습
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// 2. 함수의 '값'이 아닌 '타입'을 가져오기 위해 typeof를 사용하고,
// 그 타입에서 반환값만 추출하기 위해 ReturnType을 사용합니다.
type UserSessionDTO = ReturnType<typeof getUserSession>;

// 3. 이제 뽑아낸 타입을 자유롭게 활용할 수 있습니다.
const mySession: UserSessionDTO = {
  id: 456,
  username: "junior_dev",
  roles: ["user"],
  lastLogin: new Date()
};

console.log("현재 세션 정보:", mySession);