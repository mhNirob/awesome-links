//import { ApolloServer } from "apollo-server-micro";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import Cors from "micro-cors";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";
import { startStandaloneServer } from '@apollo/server/standalone';


const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers });

// const startServer = apolloServer.start();

// export default cors(async function handler(req, res) {
//     await startServer;

//     await apolloServer.createHandler({
//         path: 'api/graphql'
//     })(req, res);
// })

// export const config = {
//     api: {
//         bodyParser: false
//     }
// }

apolloServer.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

// const { url } = await startStandaloneServer(apolloServer);
// console.log(`🚀 Server ready at ${url}`);
