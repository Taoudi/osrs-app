import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Jumbotron from 'react-bootstrap/Jumbotron';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

        //this.items = Array.from(props.items);       
      }
    
     handleClick(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
      }

      fixList(){
        this.listItems = this.items.map((item) =>
          <li>{item.name}</li>
        );
      }

    render () {
         return (
            [
              <Jumbotron>
              <Button variant="dark" className="btn-primary" onClick={this.handleClick}>
            {this.props.name}
         </Button>
        <Collapse in={this.state.isToggleOn}><div>{Array.from(this.props.items).map(item => <p>{item.name} - {item.value}gp</p>)}</div></Collapse>
        </Jumbotron>
            ]
     );
    }
  }
  export default ListItem;
