interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // 추가
  };
}

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "이정환",
//     age: 17
//   },
// };



function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name} - ${author.age}`);
}

// printAuthorInfo(post.author)



const authorKey = "author";

// function printAuthorInfo(author: Post[authorKey]) { // ❌
//   console.log(`${author.id} - ${author.name}`);
// }

// function printAuthorInfo(author: Post["what"]) { // ❌
//   console.log(`${author.id} - ${author.name}`);
// }


interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// function printAuthorInfo(authorId: Post["author"]["id"]) {
//   console.log(authorId);
// }



type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];


const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

console.log(post)


type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number]
// number | string | boolean