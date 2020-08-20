import React, { Component } from 'react';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

        const numbers = [1,2,3];
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
              <button onClick={this.handleClick}>
            {this.props.name}
         </button>,
        <div>{this.state.isToggleOn ? Array.from(this.props.items).map(item => <div>{item.name} - {item.value}gp</div>) : ''}</div>]
     );
    }
  }
  export default ListItem;
