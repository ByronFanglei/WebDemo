import React, { Component } from 'react';
import store from './store'
import { message } from 'antd'
import { changeInputAction, changeList, delList } from './store/actionCreators'
import TodulistUi from './TodulistUi'


class Todulist extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handStoreChange)
  }
  render() {
    return (
      <TodulistUi 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange}
        handleAdd={this.handleAdd}
        handleDel={this.handleDel}
      />
    );
  }
  handleChange = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  handleAdd = () => {
    if (!this.state.inputValue) return message.error('请输入清单内容！！！')
    const action = changeList()
    store.dispatch(action)
  }
  handleDel = (index) => {
    const action = delList(index)
    store.dispatch(action)
  }
  handStoreChange = () => {
    this.setState(store.getState())
  }
}

export default Todulist;