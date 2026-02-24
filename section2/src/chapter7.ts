// void
// void 타입은 아무런 값도 없음을 의미하는 타입입니다.


// 보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용합니다.
function func2(): void {
  console.log("hello");
}


// 변수의 타입으로도 void 타입을 지정 가능
// 단, oid 타입의 변수에는 undefiend 이외의 다른 타입의 값은 담을 수 없음
// let a: void;
// a = undefined;

// tsconfig.json에 엄격한 null 검사(strictNullChecks) 옵션을 해제(False)로 설정 하면
// void 타입의 변수에 null 값도 담을 수 있음
// "strictNullChecks: false" 일 경우
// let a: void;
// a = undefined;
// a = null;

// never 타입
// 보통 다음과 같이 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용됩니다.

//  func3는 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없음
// 영원히 종료될 수 없기 때문에 뭔가를 반환한다는 것 자체가 '불가능' 
function func3(): never {
  while (true) {}
}

// 무한 루프 외에도 다음과 같이 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의
function func4(): never {
  throw new Error();
}

// 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 됨
let anyVar: any;

let a: never;
a = 1;
a = null;
a = undefined;
a = anyVar;
