import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
});
