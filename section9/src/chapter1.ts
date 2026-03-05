
// number를 string에 할당 가능하면 참
// 즉 상위 타입인지
type A = number extends string ? number : string;


type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;




// 제너릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number


function removeSpaces(text: string) {
  return text.replaceAll(" ", "");
}

let result = removeSpaces("hi im winterlood");




function removeSpaces2(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
} 

let result2 = removeSpaces2("hi im winterlood");
// string | undefined




function removeSpaces3<T>(text: T): T extends string ? string : undefined;
function removeSpaces3(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result3 = removeSpaces3("hi im winterlood");
// string

let result4 = removeSpaces3(undefined);
// undefined


function removeSpaces4(text: any) : any extends string ? string : undefined{
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}




type StringNumberSwitch2<T> = T extends number ? string : number;


let c: StringNumberSwitch2<number | string>;
// string | number







type Exclude<T, U> = T extends U ? never : T;

type D = Exclude<number | string | boolean, string>;