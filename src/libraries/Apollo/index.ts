import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', //'https://multilingueeapi.herokuapp.com/graphql',
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
