import React from 'react';
import './App.scss';
import { AppChildrenRoutes } from './routes';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import MenuBar from './components/MenuBar/MenuBar';
import ButtonControls from './components/ButtonControls/ButtonControls';


const App = () => {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <MenuBar/>
        <ButtonControls />
        <AppChildrenRoutes />
      </div>
    </ApolloProvider>
  );
};

export default App;
