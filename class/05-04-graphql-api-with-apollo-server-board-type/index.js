// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'


// The GraphQL schema
const typeDefs = gql`

  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn 객체 한개를 의미
    fetchBoards: [BoardReturn] # 배열 안에 객체 한개 이상
  }
  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    }
`;

const resolvers = {
  Query: {
    fetchBoards:(_, args) =>{
      //데이터베이스에서 데이터를 꺼내오는 로직

      return [
        {number: 1, writer: "철수", title: "제목부분", contents: "내용부분"},
        {number: 2, writer: "영희", title: "제목1", contents: "내용1"},
        {number: 3, writer: "바둑이", title: "제목2", contents: "내용2"},
        {number: 4, writer: "영철", title: "제목3", contents: "내용3"}] 
    }
  },

  Mutation:{
    createBoard:(_, args) => {
      //데이터베이스에 데이터를 저장하는 로직
      console.log(args)
      return "등록에 성공하였습니다 !"
    }
  }
};

const server = new ApolloServer({
  // typeDefs : typeDefs,
  // resolvers : resolvers 자바스크립트에서 키와 벨류값이 같으면 벨류를 아래와 같이 생략할 수 있음
  typeDefs,
  resolvers
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});