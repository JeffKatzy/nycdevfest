

class MyUl extends React.Component {
  render(){

    let lis = this.props.text.map(function(text){
      return React.createElement('li', {}, text)
    })

    return(
      <ul >
        {lis}
      </ul>

    )
  }
}


let myUl = React.createElement(MyUl, {text: ['my text', 'hello', 'chao', 'another li']})

ReactDOM.render(myUl , document.getElementById('content'))
