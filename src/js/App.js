import React, { useState, useEffect,Image } from 'react';
import List from './List'
import '../css/App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Palette from './Palette';

function App() {
  
  const [bosses, setBosses] = useState(0);
  const [color, setColor] = useState('#282c34');
  const [btn_color, setBtnColor] = useState('dark');

    const onChangeColorHandler = (val) => {
      console.log(val.target.value)
          setColor(val.target.value)

  }


  const onChangeBtnColorHandler = (val) => {
    console.log(val.target.value)

  setBtnColor(val.target.value)
}


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
    <div className="App" style={{backgroundColor: color}}>
      <body style={{backgroundColor: color}}></body>
      <header className="App-header" background-color={color}>
      <p> the button color is : {btn_color} </p>
      <p> the color is : {color} </p>

        <Palette value={color} btn_value={btn_color} onChangeColor={onChangeColorHandler} onChangeBtnColor={onChangeBtnColorHandler} />
        <List items={bosses} btn_color={btn_color}></List>
      </header>
    </div>
  );
}

export default App;
