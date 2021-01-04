import React, { PureComponent } from 'react'
// import rxjs from 'rxjs'


class App extends PureComponent{
  _handleButton = () => {
    console.log('点击了button')
  }

  componentDidMount() {
    var button = document.querySelector('button')
    // button.addEventListener('click', this._handleButton)
    // rxjs.interval(500).pipe(rxjs.operators.take(4)).subscribe(console.log)
  }

  componentWillUnmount() { 
    var button = document.querySelector('button')
    button.removeEventListener('click', this._handleButton)
  }
  
  render() {
    return(
      <div>
        <button>Hello</button>
      </div>
    )
  }
}

export default App