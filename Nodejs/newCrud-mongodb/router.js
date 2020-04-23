const express = require('express')
const router = express.Router();
const STU = require('./student');
//渲染首页get
router.get('/', (req, res) => {
  STU.find().then((value) => {
    res.render('index.html', {
      students: value
    })
  }).catch((reason) => {
    console.log(reason)
  })
})
//添加信息get页面
router.get('/student/add', (req, res) => {
  res.render('add.html')
})
//添加信息 post
router.post('/student/add', (req, res) => {
  new STU(req.body).save().then((value) => {
    console.log(value)
    res.redirect('/')
  }).catch((reason) => {
    console.log(reason+ '报错')
  })
})
//编辑信息get页面
router.get('/student/edit', (req, res) => {
  STU.findById(req.query.id).then((value) => {
    res.render('edit.html', {
      value
    })
  }).catch((reason) => {
    console.log(reason)
  })
})
//编辑信息post页面
router.post('/student/edit', (req, res) => {
  STU.findByIdAndUpdate(req.body.id, req.body).then((value) => {
    console.log(value)
    res.redirect('/')
  }).catch((reason) => {
    console.log(reason)
  })
})
//删除get
router.get('/student/delte', (req, res) => {
  STU.findOneAndDelete({id: req.body.id}).then((value) => {
    console.log(value)
    res.redirect('/')
  }).catch((reason) => {
    console.log(reason)
  })
})






module.exports = router;