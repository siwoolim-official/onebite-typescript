// unknown 타입 (전체 집합)
// let a: unknown = 1;                 // number -> unknown
// let b: unknown = "hello";           // string -> unknown
// let c: unknown = true;              // boolean -> unknown
// let d: unknown = null;              // null -> unknown
// let e: unknown = undefined;         // undefined -> unknown
// let f: unknown = [];                // Array -> unknown
// let g: unknown = {};                // Object -> unknown
// let h: unknown = () => {};          // Function -> unknown

let unknownValue: unknown;

// let a: number = unknownValue;
// 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.

// never 타입 (공집합 타입)
function errorFunc(): never {
  throw new Error();
}


// 공집합은 모든 집합의 부분 집합입
// 그러므로 never 타입은 모든 타입의 서브 타입입니다. 
// 따라서 never 타입은 모든 타입으로 업캐스팅 할 수 있습니다.
// let neverVar: never;

// let a: number = neverVar;            // never -> number
// let b: string = neverVar;            // never -> string
// let c: boolean = neverVar;           // never -> boolean
// let d: null = neverVar;              // never -> null
// let e: undefined = neverVar;         // never -> undefined
// let f: [] = neverVar;                // never -> Array
// let g: {} = neverVar;                // never -> Object

// 반면 그 어떤 타입도 never 타입으로 다운 캐스팅 할 수 없습니다.
// let a: never = 1;                 // number -> never ❌
// let b: never = "hello";           // string -> never ❌
// let c: never = true;              // boolean -> never ❌
// let d: never = null;              // null -> never ❌
// let e: never = undefined;         // undefined -> never ❌
// let f: never = [];                // Array -> never ❌
// let g: never = {};                // Object -> never ❌


// void 타입
// 무것도 반환하지 않는 함수의 반환값 타입
function noReturnFunc(): void {
  console.log("hi");
}

// undefined을 반환 해도 오류가 발생하지 않습니다. 
// undefined 타입은 void 타입의 서브 타입이므로 업캐스팅이 가능하기 때문
function noReturnFuncA(): void {
  return undefined;
}

function noReturnFuncB(): void {
  return;
}

function noReturnFuncC(): void {}

// void 타입의 서브타입은 undefined 타입과 never 타입
// void 타입에는 undefined, never 이외에 다른 타입의 값을 할당할 수 없음
let voidVar: void;

voidVar = undefined; // undefined -> void (ok)

// let neverVar: never;
// voidVar = neverVar; // never -> void (ok)




// any 타입 (치트키)
// any 타입은 사실상 타입 계층도를 완전히 무시합니다. any는 일종의 치트키같은 타입
let anyValue: any;

let num: number = anyValue;   // any -> number (다운 캐스트)
let str: string = anyValue;   // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num;  // number -> any (업 캐스트)
anyValue = str;  // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
