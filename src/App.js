import React from 'react';
import { Route } from 'react-router-dom';
import MapPage from './pages/MapPage';

const App = () => {
  return (
    <>
      <Route component={MapPage} path="/" />
    </>
  );
};
export default App;
