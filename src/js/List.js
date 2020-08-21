import ListItem from './ListItem'
import React, { Component } from 'react';


class List extends Component {
    constructor(props) {
        super(props);
      }
  

    render () {
      return (
        [
         <div>{Array.from(this.props.items).map(item =>  <ListItem name={item.name} items={item.items}></ListItem>)}</div>
        ]
      );
    }
  }
  export default List;