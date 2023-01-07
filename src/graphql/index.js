import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://content-hyena-32.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': import.meta.env.VITE_HASURA_SECRET,
  },
  cache: new InMemoryCache(),
});
