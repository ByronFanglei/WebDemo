import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './views/Index'
import List from './views/List'


const Approuter = () => {
    return (
      <Router>
        <ul>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link to='/list/'>列表</Link>
          </li>
        </ul>
        <Route path='/' exact component={Index} />
        <Route path='/list/:id' component={List} />
      </Router>
    );
}

export default Approuter;