import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Matrix} from './components/woo';



function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <p>Hi, I'm Nika</p>
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>Hi, I'm Nika. </p>*/}
      </header>
     <Matrix style={{backgroundColor: 'blue'}} />

    </div>
  );
}

export default App;
