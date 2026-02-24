// class Employee {
//   // 필드
//   name: string = "";
//   age: number = 0;
//   position: string = "";

//   // 메서드
//   work() {
//     console.log("일함");
//   }
// }

// // 생성자 함수
// class Employee {
//   // 필드
//   name: string = "";
//   age: number = 0;
//   position: string = "";

//   // 생성자
//   constructor(name: string, age: number, position: string) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log("일함");
//   }
// }

//  선택적 프로퍼티로
class Employee {
  // 필드
  name: string;
  age: number;
  position?: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}


// 클래스는 타입
// 타입스크립트의 클래스는 타입으로도 사용할 수 있습니다

// class Employee {
//   (...)
// }

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};


// 상속
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // 최상단 필수
    this.officeNumber = officeNumber;
  }
}