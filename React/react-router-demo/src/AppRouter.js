import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import WorkPlace from './Pages/WorkPlace'
import './approuter.css'

const AppRouter = () => {
  let RouterData = [
    {path:'/', title: '博客首页', exact: true, component: Index},
    {path:'/video/', title: '视频教程', exact: false, component: Video},
    {path:'/workplace/', title: '职场技能', exact: false, component: WorkPlace},
  ]
  return(
    <Router>
      <Redirect to='/' />
      <div className='main'>
        <div className='left'>
          <h2>一级导航</h2>
          <ul>
            {
              RouterData.map((item, index) => {
                return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
              })
            }
          </ul>
        </div>
        <div className='right'>
          {
            RouterData.map((item, index) => {
              return(<Route key={index} path={item.path} exact={item.exact} component={item.component} />)
            })
          }
        </div>

      </div>
    </Router>
  )
}

export default AppRouter
