class List extends Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
     makeList(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
      }

    render () {
        
    }
  }
  export default List;