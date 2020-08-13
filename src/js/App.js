import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentStatus(data.skim);
    });
  }, []);





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {currentTime} <br></br>
          {currentStatus}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
