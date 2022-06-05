import React, { useState } from 'react';

import './App.css';
import Login from './components/Login/Login';


const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
