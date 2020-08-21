import React, { useState, useEffect } from 'react';
import List from './List'
import '../css/App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [bosses, setBosses] = useState(0);



  /*useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
      setBossName(data.name);
      setBossItems(data.items);
      console.table(data)
    });
  }, []);*/


  useEffect(() => {
    fetch('/testlist').then(res => res.json()).then(data => {
      setBosses(data.bosses);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <List items={bosses}></List>
      </header>
    </div>
  );
}

export default App;
