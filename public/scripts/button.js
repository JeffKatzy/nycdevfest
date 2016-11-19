class Button extends React.Component {
  constructor(props){
    super(props)
    this.state = {clicked: true}
  }
  handleOnClick(){
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    let text = this.state.clicked ? 'please click me' : 'dont click me'
    return(
      <button onClick={this.handleOnClick.bind(this)}> {text} </button>
    )
  }
}

ReactDOM.render(<Button data="hello"/>, document.getElementById('content'))
