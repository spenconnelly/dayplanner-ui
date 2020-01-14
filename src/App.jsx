import React from 'react';
import './App.scss';
import { AppChildrenRoutes } from './routes';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from './apollo/client';
import MenuBar from './components/MenuBar/MenuBar';
import ModeButtonGroup from './components/ModeButtonGroup/ModeButtonGroup';


const App = () => {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <MenuBar/>
        <ModeButtonGroup className="mode--buttons" />
        <AppChildrenRoutes />
      </div>
    </ApolloProvider>
  );
};

export default App;
