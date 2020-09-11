import React, { useState, useEffect,Image } from 'react';
import BossList from './BossList'
import '../css/App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Palette from './Palette';

function App() {
  
  const [bosses, setBosses] = useState(0);
  const [color, setColor] = useState('#282c34');
  const [btn_color, setBtnColor] = useState('dark');
  const [backgroundColor, setBackGroundColor] = useState('aliceblue');

    const onChangeColorHandler = (val) => {
      //console.log(val.target.value)
          setColor(val.target.value)

  }


  const onChangeBtnColorHandler = (val) => {
    //console.log(val.target.value.btn_color)
    //console.log(JSON.stringify(val.target.value.color))
    var res = val.target.value.split(" ");
    setColor(res[0])
    setBtnColor(res[1])
    setBackGroundColor(res[2])
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
        <Palette current={color} value={color} btn_value={btn_color} onChangeColor={onChangeColorHandler} onChangeBtnColor={onChangeBtnColorHandler} />
        <BossList items={bosses} btn_color={btn_color} backgroundColor={backgroundColor}></BossList>
      </header>
    </div>
  );
}

export default App;
