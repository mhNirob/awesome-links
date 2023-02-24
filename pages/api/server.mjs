import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import { typeDefs } from "../../graphql/schema";
// import { resolvers } from "../../graphql/resolvers";

// // The GraphQL schema
// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;

// // A map of functions which return data for the schema.
// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };

const typeDefs = `#graphql
    type Link {
        id: String
        title: String
        description: String
        url: String
        category: String
        imageUrl: String
        users: [String]
    }

    type Query {
        links: [Link]
    }
`;

const resolvers = {
    Query: {
        links: () => [
            {
                category: "Open Source",
                description: "Fullstack React framework",
                id: "1",
                imageUrl: "https://github.com/vercel.png",
                title: "Next.js",
                url: "https://nextjs.org",
            },
            {
                category: "Open Source",
                description: "Next Generation ORM for TypeScript and JavaScript",
                id: "2",
                imageUrl: "https://github.com/prisma.png",

                title: "Prisma",
                url: "https://prisma.io",
            },
        ]
    }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);