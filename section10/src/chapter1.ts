// Partial<T>

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// const draft: Post = { // ❌ tags 프로퍼티가 없음
//   title: "제목은 나중에 짓자...",
//   content: "초안...",
// };

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

// Partial<T> 구현하기
type Partial<T> = {
  [key in keyof T]?: T[key];
};


// Required<T>

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 반드시 썸네일 프로퍼티가 존재해야 하는 게시글
const withThumbnailPost: Post = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
//   thumbnailURL: "https://...",
};

const withThumbnailPost2: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// 구현
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// Readonly
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const readonlyPost: Post = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

readonlyPost.content = '해킹당함';

const readonlyPost2: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost2.content = '해킹당함'; // ❌

// 구현하기
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};


