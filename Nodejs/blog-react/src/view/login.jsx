import React, { Component } from 'react'
import { Input, Button, message } from 'antd';
import '../assetc/style/login.css'
import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.hanleUser = this.hanleUser.bind(this)
    this.hanlePass = this.hanlePass.bind(this)
    this.hanleLogin = this.hanleLogin.bind(this)
  }

  render() {
    return (
      <div className='content'>
        <h1>登录页面</h1>
        <div className='inputbar'>
          <Input placeholder="请输入用户名" onChange={this.hanleUser} />
          <Input.Password placeholder="请输如密码" onChange={this.hanlePass} />
        </div>
        <Button type="primary" onClick={this.hanleLogin}>登录</Button>
      </div>
    )
  }
  hanleUser = (event) => {
    this.setState({
      username: event.target.value
    }, () => {
    })
  }
  hanlePass = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  hanleLogin = () => {
    const { username, password } = this.state
    if (!username.trim() || !password.trim()) return message.warning('用户名或密码不能为空')
    let data = {username, password}
    // 前后端格式要一直哇
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.post('/app/api/user/login', JSON.stringify(data))
    .then(value => {
      const data = value.data
      console.log(data)
      if (data.errno === 0) {
        this.props.history.push({
          pathname: '/'
        })
        sessionStorage.setItem('name', data.data.name)
      }
    }).catch(reason => {
      console.log(reason)
    })
  }
  
}

export default Login