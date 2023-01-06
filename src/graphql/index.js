import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://content-hyena-32.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'Lk6zDjkoP2g1aWOx7G2giaRa9RFNbFOaQPIrOdbqJQYcL5ZI2gWXoOAv2WqSzkym',
  },
  cache: new InMemoryCache(),
});
