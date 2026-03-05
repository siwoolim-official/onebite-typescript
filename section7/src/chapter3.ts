interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
  key2: true,
  key3: true,
};

// interface Student {
//   type: "student";
//   school: string;
// }

// interface Developer {
//   type: "developer";
//   skill: string;
// }

// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// function goToSchool(user: User) {
//   if (user.profile.type !== "student") {
//     console.log("잘 못 오셨습니다");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// }

// const developerUser: User = {
//   name: "이정환",
//   profile: {
//     type: "developer",
//     skill: "typescript",
//   },
// };

// const studentUser: User = {
//   name: "홍길동",
//   profile: {
//     type: "student",
//     school: "가톨릭대학교",
//   },
// };


interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};