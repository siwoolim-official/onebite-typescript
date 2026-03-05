// pick
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// const legacyPost: Post = { // ❌
//   title: "",
//   content: "",
// };

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}


const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};
// 추출된 타입 : { title : string; content : string }

// 구현
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// Omit<T, K>

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}


// const noTitlePost: Post = { // ❌
//   content: "",
//   tags: [],
//   thumbnailURL: "",
// };

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Record<K, V>
type Thumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

// type Thumbnail = {
//  (...)
//   watch: {
//     url: string;
//   };
// };

type Thumbnail2 = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;

let a: Thumbnail2 = {
  large: {
    url: ""
  },
  medium: {
    url: ""
  },
  small: {
    url: ""
  },
  watch: {
    url: ""
  }
};

// 구현 
type Record<K extends keyof any, V> = {
  [key in K]: V;
};