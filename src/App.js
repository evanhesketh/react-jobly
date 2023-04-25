import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <RoutesList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
