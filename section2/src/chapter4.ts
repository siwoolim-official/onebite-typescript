// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};


// 참고로 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능
// type User = {
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// };

// type User = {}


// 스코프가 다르다면 다음과 같이 중복된 이름으로 여러개의 별칭을 선언 가능
// type User = {
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// };

// function test() {
//   type User = string;
// }

// 인덱스 시그니처(Index Signature)

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz'
};

// 이때 반드시 포함해야 하는 프로퍼티가 있다면
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

// 덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 함
type CountryNumberCodes2 = {
  [key: string]: number;
  Korea: string; // 오류!
};