

class MyUl extends React.Component {
  render(){

    let lis = this.props.text.map(function(text){

      return (<li>
          {text}
        </li>)
    })

    return(
      <ul >
        {lis}
      </ul>
    )
  }
}




ReactDOM.render(<MyUl />, document.getElementById('content'))
