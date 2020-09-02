
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Palette extends Component {
    constructor(props) {
        super(props);
      }


    render () {
      const { value , onChangeColor, btn_value, onChangeBtnColor } = this.props;

        return (
          [
            //<p>{console.log(this.value)}</p>,
            <ul style={{justifyContent: 'center', alignItems: 'center', color:'aliceblue'}}>
            <Button variant="dark" value='#282c34 dark aliceblue' name='colors' onClick={onChangeBtnColor}/>
            <Button variant="primary" value='steelblue primary aliceblue' onClick={onChangeBtnColor}/>
            <Button variant="info" value='darkcyan info aliceblue' onClick={onChangeBtnColor}/>
            <Button variant="success" value='darkgreen success aliceblue' onClick={onChangeBtnColor}/>
            <Button variant="warning" value='goldenrod warning aliceblue' onClick={onChangeBtnColor}/>
            <Button variant="danger" value='darkred danger aliceblue' name='colors' onClick={onChangeBtnColor}/>
            <Button variant="light" value='aliceblue light #282c34' onClick={onChangeBtnColor}/>

            </ul>
          ]
        );
      }
    }


      export default Palette;