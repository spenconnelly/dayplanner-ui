import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { apiUrl } from '../constants/urlConstants';

const cache = new InMemoryCache({});

cache.writeData({
  data: {
    userProfile: {
      id: null,
      email: null,
      events: [],
      __type: 'Profile'
    }
  }
});

export default new ApolloClient({
  cache,
  link: new HttpLink({
    uri: apiUrl,
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors);
      console.log('networkError', networkError);
    }
  }),
  resolvers: {}
});
