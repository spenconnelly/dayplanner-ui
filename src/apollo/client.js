import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { apiUrl } from '../constants/urlConstants';

const cache = new InMemoryCache({});

cache.writeData({
  data: {
    userProfile: {
      id: null,
      email: 'dmiceli16@gmail.com',
      events: []
    }
  }
});

export default new ApolloClient({
  cache,
  link: new HttpLink({
    uri: apiUrl
  }),
  resolvers: {}
});
