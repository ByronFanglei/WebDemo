import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

const Video = () => {
  return(
    <div>
      <h2>视频</h2>
    <ul>
      <li><Link to='/video/reactpage/'>react</Link></li>
      <li><Link to='/video/vue/'>vue</Link></li>
      <li><Link to='/video/flutter/'>flutter</Link></li>
    </ul>

    <div>
      <Route path='/video/reactpage/' component={ReactPage} />
      <Route path='/video/vue/' component={Vue} />
      <Route path='/video/flutter/' component={Flutter} />
    </div>
    </div>
  )
}

export default Video
