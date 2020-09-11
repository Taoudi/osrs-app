import BossItem from './BossItem'
import React, { Component } from 'react';
import '../css/App.css';


class BossList extends Component {
    constructor(props) {
        super(props);
      }
  

    render () {
      return (
        [
         <ul styles={{justifyContent: 'center', alignItems: 'center'}}>{Array.from(this.props.items).map(item =>  <BossItem class="grid" name={item.name} items={item.items} uri={item.uri} backgroundColor={this.props.backgroundColor} btn_color={this.props.btn_color}></BossItem>)}</ul>
        ]
      );
    }
  }
  export default BossList;