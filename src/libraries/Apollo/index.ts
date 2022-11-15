import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://multilingueeapi.herokuapp.com/graphql', //'http://localhost:4000/graphql'
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
