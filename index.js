import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    //환경설정
    typeDefs: "graphql/schema.graphql",
    resolvers 

})
server.start(()=> console.log("Graphql Server Running"));