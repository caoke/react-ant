import React from 'react';
// import logo from '../assets/image/logo.svg';
import '../style/app.css';
import { BrowserRouter as Link } from "react-router-dom"
import { Button } from 'antd';

function App() {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
      <Button>about</Button>
  </div>
  );
}

export default App;
