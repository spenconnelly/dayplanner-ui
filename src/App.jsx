import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import { AppChildrenRoutes } from './routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <AppChildrenRoutes />
    </div>
  );
}

export default App;
