// class NumberList {
//   constructor(private list: number[]) {}

// 	push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// const numberList = new NumberList([1, 2, 3]);


// class StringList {
//   constructor(private list: string[]) {}

// 	push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// const stringList = new StringList(["1", "2", "3"]);



class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);

const numberList2 = new List<number>([1, 2, 3]);
const stringList2 = new List<string>(["1", "2"]);