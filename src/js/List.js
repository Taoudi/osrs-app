class ListItem extends Component {
    state = { color : 'white' };
    onClick = () => {
       this.setState({ color: 'red' });
    }
    render () {
         return (
          <li key={i} className="nameBox">
              {this.props.value}
           <div onClick={this.onClick} style={{backgroundColor: props.color}} 
      className="clickBox">
          </div>
         </li>
     );
    }
  }
  
  
  const CheckBlock = props => {
  
     console.log(props.change);
     console.log(props.color);
  
      let mainList = [];
  
      for(let i = 0; i <= 3; i++)
      {
          mainList[i] = <ListItem key={i} value={props.MainList[i]} />
      }
  
  
         return (
          <Aux>
              <ul className = "mainList">{mainList}</ul>
              <button>Enter</button>
          </Aux>
         );
  };