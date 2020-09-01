
import React, { Component } from 'react';


class Palette extends Component {
    constructor(props) {
        super(props);

        let map = [{'key': 'RED', 'btn_value':'danger'}, {'key': 'GREY', 'btn_value':'dark'}]

      }


    render () {
      const { value , onChangeColor, btn_value, onChangeBtnColor } = this.props;

        return (
          [
            //<p>{console.log(this.value)}</p>,
            <input type="text"  value={btn_value} onChange={onChangeBtnColor}/> ,
            <input type="text"  value={value} onChange={onChangeColor}/> 

          ]
        );
      }
    }


      export default Palette;