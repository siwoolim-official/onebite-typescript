// 함수 타입 호환성

// 기준 1 : 반환값 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌


// 기준 2 : 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // ❌
d = c; // ✅