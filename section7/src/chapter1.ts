// function map(arr: unknown[], callback: (item: unknown) => unknown): unknown[] {
//     return []
// }

function map<T>(arr: T[], callback: (item: T) => T): T[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}


const arr = [1, 2, 3];

let result: number[] = map(arr, (it) => it * 2);
console.log(result)


// map(arr, (it) => it.toString()); // ❌

const arr2 = [1, 2, 3];

function map2<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let result2: string[] = map2(arr2, (it) => it.toString());
// string[] 타입의 배열을 반환
// 결과 : ["1", "2", "3"]
console.log(result2)