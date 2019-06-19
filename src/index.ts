import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
import { resolvers } from './resolvers';

const typeDefs = importSchema('./schemas/index.graphql');

const server = new GraphQLServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on localhost:4000'));
