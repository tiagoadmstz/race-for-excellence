import React from 'react';
import logo from './assets/logo.png';

import Routes from './routes.js';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Cooperstandard"/>
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
