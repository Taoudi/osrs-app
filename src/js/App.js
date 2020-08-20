import React, { useState, useEffect } from 'react';
import ListItem from './ListItem'
import '../css/App.css';

function App() {
  
  const [bossName, setBossName] = useState(0);
  const [bossItems, setBossItems] = useState(0);


  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
      setBossName(data.name);
      setBossItems(data.items);
      console.table(data)
    });
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        <ListItem name={bossName} items={bossItems}></ListItem>
      </header>
    </div>
  );
}

export default App;
