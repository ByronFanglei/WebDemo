import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button, message } from 'antd'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

function set_time(str){
  var n = parseInt(str)*1000;
  var D = new Date(n);
  var year = D.getFullYear();//四位数年份

  var month = D.getMonth()+1;//月份(0-11),0为一月份
  month = month<10?('0'+month):month;

  var day = D.getDate();//月的某一天(1-31)
  day = day<10?('0'+day):day;

  var hours = D.getHours();//小时(0-23)
  hours = hours<10?('0'+hours):hours;

  var minutes = D.getMinutes();//分钟(0-59)
  minutes = minutes<10?('0'+minutes):minutes;

  var now_time = year+'-'+month+'-'+day+' '+hours+':'+minutes;
  return now_time;
}
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    key: 'createtime',
    render: timer => set_time(timer)
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
];

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogslist: {},
      name: '登录'
    }
    this.handleNewBlog = this.handleNewBlog.bind(this)
  }


  componentDidMount() {
    let name = sessionStorage.getItem('name')
    console.log(name)
    if (name) {
      this.setState({
        name
      })
    }

    axios.get('/app/api/blog/list').then(value => {
      const data = value.data.data
      for (let i = 0; i < data.length; i++) {
        data[i].key = i
      }
      this.setState({
        blogslist: data
      })
    }).catch(reason => {
      console.log(reason)
    })
  }

  render() {
    let data = [];
    Object.assign(data, this.state.blogslist)

    return(
      <div>
        <h1>博客首页展示</h1>
        <Link to='/login'>
          <Button type="primary">{this.state.name}</Button>
        </Link>
        
        <Button type="primary" onClick={this.handleNewBlog}>新增博客</Button>

        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
  handleNewBlog = () => {
    if (sessionStorage.getItem('name')) {
      
    } else {
      message.warning('先登录')
    }
  }
}


export default Index