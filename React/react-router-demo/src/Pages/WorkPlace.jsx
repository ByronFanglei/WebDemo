import React from 'react'
import { Route, Link } from 'react-router-dom'
import One from './workplace/One'
import Two from './workplace/Two'

const WorkPlace = () => {
  return(
    <div>
      <h2>WorkPlace</h2>
      <ul>
        <li><Link to='/workplace/one/'>one</Link></li>
        <li><Link to='/workplace/two/'>two</Link></li>
      </ul>
      <div>
        <Route path='/workplace/one/' component={One} />
        <Route path='/workplace/two/' component={Two} />
      </div>
    </div>
  )
}

export default WorkPlace
