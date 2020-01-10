import React from 'react';
import './App.scss';
import { AppChildrenRoutes } from './routes';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import MenuBar from './components/MenuBar/MenuBar';


const App = () => (
  <ApolloProvider client={client} >
    <div className="App">
      <MenuBar/>
      <AppChildrenRoutes />
    </div>
  </ApolloProvider>
);

export default App;
