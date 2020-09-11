import React, { Component,Image } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../css/App.css';


class BossItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.baseUrl = "./bosses/"
        this.baseItemUrl = "./items/" 
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
            <Jumbotron class="grid" style={{backgroundColor: this.props.backgroundColor, width:'100%'}} >  
              <img width='28x' height='28x' src={this.baseUrl + this.props.uri} /> 
              <p></p>
              <Button variant={this.props.btn_color} className="btn-primary" onClick={this.handleClick}>
                {this.props.name}
              </Button>
              <Collapse in={this.state.isToggleOn}>
                <div style={{justifyContent: 'center', alignItems: 'center',color: this.props.backgroundColor ,padding:'1%'}} >{Array.from(this.props.items).map(item => 
                  <li><Button variant="light"><img width='28x' height='28x' src={this.baseItemUrl + item.uri}></img></Button><p><small>{item.name}-{item.value}</small></p></li>
                  )}
                </div>
              </Collapse>
            </Jumbotron>
        ]
     );
    }
  }
  export default BossItem;