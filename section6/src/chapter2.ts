// class Employee {
//   // 필드
//   name: string;      // 자동으로 public
//   age: number;       // 자동으로 public
//   position: string;  // 자동으로 public

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

// const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동";
// employee.age = 30;
// employee.position = "디자이너";






// Private
// 클래스 내부에서만 이 필드에 접근
// class Employee {
//   // 필드
//   private name: string; // private 접근 제어자 설정
//   public age: number;
//   public position: string;

//   ...

//   // 메서드
//   work() {
//     console.log(`${this.name}이 일함`); // 여기서는 접근 가능
//   }
// }

// const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동"; // ❌ 오류
// employee.age = 30;
// employee.position = "디자이너";


// Protected
//proteced 접근제어자는 private과 public의 
// 중간으로 클래스 외부에서는 접근이 안되지만 
// 클래스 내부와 파생 클래스에서 접근이 가능하도록 
// 설정하는 접근 제어자입니다.

// class Employee {
//   // 필드
//   private name: string; // private 접근 제어자 설정
//   protected age: number;
//   public position: string;

//   ...

//   // 메서드
//   work() {
//     console.log(`${this.name}이 일함`); // 여기서는 접근 가능
//   }
// }

// class ExecutiveOfficer extends Employee {
//  // 메서드
//   func() {
//     this.name; // ❌ 오류 
//     this.age; // ✅ 가능
//   }
// }

// const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동"; // ❌ 오류
// employee.age = 30; // ❌ 오류
// employee.position = "디자이너";


// 필드 생략하기

// class Employee {
//   // 필드
//   private name: string;    // ❌
//   protected age: number;   // ❌
//   public position: string; // ❌

//   // 생성자
//   constructor(
//     private name: string,
//     protected age: number,
//     public position: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log(`${this.name} 일함`);
//   }
// }

// => 
//  생성자 매개변수에 name, age, position 처럼 
// 접근 제어자가 설정되면 자동으로 필드도 함께 선언
// class Employee {
//   // 생성자
//   constructor(
//     private name: string,
//     protected age: number,
//     public position: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   // 메서드
//   work() {
//     console.log(`${this.name} 일함`);
//   }
// }


// ==> 
//  접근 제어자가 설정된 매개변수들은 this.필드 = 매개변수가 자동으로 수행

class Employee {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}