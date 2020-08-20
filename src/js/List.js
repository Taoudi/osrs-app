import React, { Component } from 'react';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
     handleClick(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
      }

    render () {
         return (
            [<button onClick={this.handleClick}>
            Click Here!
         </button>,
        
        <div>{this.state.isToggleOn ? this.props.name : ''}</div>]
     );
    }
  }
  export default ListItem;
