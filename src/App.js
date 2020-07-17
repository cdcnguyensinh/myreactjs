import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonApp from './Button.js'
import Tick from './scripts/tick.js';
import ToggleEvent from './scripts/ToggleEvent.js';
import ToDoList from './scripts/ToDoList';

function App_2() {
  const a ="hello"
  return (
    <div className="App">
      <header className="App-header" style={{display:'none'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {a}
        </a>
      </header>
      <ButtonApp age="12" name="long New Ocean"></ButtonApp>
      <Tick></Tick>

      <ToggleEvent></ToggleEvent>
      <ToDoList />
    </div>
  );
}

export default App_2;
