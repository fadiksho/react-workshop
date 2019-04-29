import React from 'react';
import logo from './logo.svg';
import './App.css';
import NamesList from './NamesList.js' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <NamesList listType = {"ol"} listOfNames= {["C#", "JavaScript", "Html", "Python", "C++"]}/>
          <NamesList listType = {"ul"} listOfNames= {["C#", "JavaScript", "Html", "Python", "C++"]}/>
        </div>
      </header>
    </div>
  );
}

export default App;
