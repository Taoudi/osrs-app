import React, { Component,Image } from 'react';
import Item from './Item'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../css/App.css';


class BossItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false, text:'', value:'',prob:'',open:false};

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

      setOpen(e) {
        this.setState(state => ({
            open: !state.open
          }));
      }

      changeValue(e) {
        if (this.state.text == e.name && this.state.value == e.value && e.name!='' && e.value!=''){
          this.setState(state => ({
            text:'',
            value:'',
            prob:''
          }));
        }
        else{
          this.setState(state => ({
            text:e.name,
            value:e.value,
            prob:e.prob
          }));
        }
        
      }

    render () {
         return (
            [
            <Jumbotron class="grid" style={{backgroundColor: this.props.backgroundColor, width:'100%'}} >  
              <img width='28x' height='28x' src={this.baseUrl + this.props.uri} /> 
              <p></p>
              <Button variant={this.props.btn_color} className="btn-primary" onClick={this.handleClick} aria-controls="collapse-text"
                        aria-expanded={this.state.isToggleOn} >
                {this.props.name}
              </Button>
              <Collapse in={this.state.isToggleOn}>
                <div style={{ flex: 1, flexDirection:'row',justifyContent: 'flex-start', alignItems: 'stretch',color: this.props.backgroundColor}} >{Array.from(this.props.items).map(item => 
                <li>
                    <Button onClick={() => this.changeValue(item)}  variant="light"><img width='28x' height='28x' src={this.baseItemUrl + item.uri}></img></Button>
                </li>
                  )}
                <Collapse in={this.state.isToggleOn}>
                  <p> 
                    <small><b>{this.state.text}</b></small><br></br>
                    <small><b>{this.state.value}</b></small><br></br>
                    <small><b>{this.state.prob}</b></small>
                  </p>
                </Collapse>

                </div>
              </Collapse>
            </Jumbotron>
        ]
     );
    }
  }
  export default BossItem;
