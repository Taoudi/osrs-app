import React, { Component,Image } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../css/App.css';
import Collapse from 'react-bootstrap/Collapse';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.baseItemUrl = "./items/" 
        //this.items = Array.from(props.items);       
      }
    
     handleClick(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
      }




    render () {
        return (
        [
            
            <li>
                <Button onClick={this.handleClick} variant="light"><img width='28x' height='28x' src={this.baseItemUrl + this.props.item.uri}></img></Button>
                <Collapse in={this.state.isToggleOn}><p><small>{this.props.item.name}-{this.props.item.value}</small></p></Collapse>
            </li>
        ]
        );
    }   
}

export default Item;
