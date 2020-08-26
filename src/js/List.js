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
         <div>{Array.from(this.props.items).map(item =>  <ListItem class="grid" name={item.name} items={item.items} uri={item.uri}></ListItem>)}</div>
        ]
      );
    }
  }
  export default List;