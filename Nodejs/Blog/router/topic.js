const express = require('express')
const Topic = require('../models/topic')
const router = express.Router()

//渲染发布页面
router.get('/topics/new', (req, res) => {
  res.render('topic/new.html', {
    user: req.session.user
  })
})
router.post('/topics/new', (req, res) => {
  /**
   * code:
   * 0：发表成功
   * 1：发表失败
   * 500：服务器错误
   */
  const body = req.body
  body.name = req.session.user.nickname
  body.avatar = req.session.user.avatar
  new Topic(body).save().then((value) => {
    res.status(200).json({
      code: 0
    })
  }).catch((reason) => {
    res.status(500).json({
      code: 500
    })
  })
})

module.exports = router