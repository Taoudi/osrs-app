import React, { useState, useEffect } from 'react';
import ListItem from './List'
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
        <p>
          {currentTime} <br></br>
          {currentStatus}
        </p>
        <ListItem></ListItem>
      </header>
    </div>
  );
}

export default App;
