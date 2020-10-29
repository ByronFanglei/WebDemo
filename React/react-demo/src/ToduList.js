import React, { Component, Fragment } from 'react'
import ToduItem from './ToduItem'


class ToduList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list: ['123',1233]
    }
    this.handlesInp = this.handlesInp.bind(this)
    this.handleBut = this.handleBut.bind(this)
  }
  render() {
    const { inputValue, list } = this.state
    return (
      <Fragment>
        <div>
          <input type="text" name="" value={inputValue} onChange={this.handlesInp}/>
          <button onClick={this.handleBut}>add</button>
        </div>
        <ToduItem 
          list={list}
          handleDel={this.handleDel}
        />
      </Fragment>
    );
  }
  handlesInp(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBut() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDel = (index) => {
    let data = this.state.list
    data.splice(index, 1)
    this.setState({
      list: data
    })
  }
}

export default ToduList
