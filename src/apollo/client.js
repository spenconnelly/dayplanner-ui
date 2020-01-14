import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
import { apiUrl } from '../constants/urlConstants';

const cache = new InMemoryCache({});

const client = new ApolloClient({
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

persistCache({
  cache,
  storage: window.localStorage
}).then(() => {
  const initData = {
    data: {
      userProfile: {
        id: null,
        email: null,
        events: [],
        __type: 'Profile'
      }
    }
  };
  client.writeData({
    data: initData
  });
  client.onResetStore(async () => cache.writeData({ data: initData }));
});

export default client;
