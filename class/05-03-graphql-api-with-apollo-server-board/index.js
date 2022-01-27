// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'


// The GraphQL schema
const typeDefs = gql`
type Query {
  fetchBoards: String
}
type Mutation {
  createBoard: String
  }
`;

const resolvers = {
  Query: {
    fetchBoards:() =>{
      //데이터베이스에서 데이터를 꺼내오는 로직

      return "조회에 성공하였습니다 !"  
    }
  },

  Mutation:{
    createBoard:()=>{
      //데이터베이스에 데이터를 저장하는 로직

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