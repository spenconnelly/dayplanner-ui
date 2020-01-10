import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { apiUrl } from '../constants/urlConstants';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: apiUrl
  })
});
