import ListItem from './ListItem'
import React, { Component } from 'react';
import '../css/App.css';


class List extends Component {
    constructor(props) {
        super(props);
      }
  

    render () {
      return (
        [
         <ul styles={{justifyContent: 'center', alignItems: 'center'}}>{Array.from(this.props.items).map(item =>  <ListItem class="grid" name={item.name} items={item.items} uri={item.uri} backgroundColor={this.props.backgroundColor} btn_color={this.props.btn_color}></ListItem>)}</ul>
        ]
      );
    }
  }
  export default List;