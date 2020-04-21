const express = require('express');
const Student = require('./student');
//创建一个路由
const router = express.Router()
//路由挂在到router中

router.get('/', (req, res) => {
  Student.find().then((value) => {
    res.render('index.html', {
      students: value
    })
  }).catch((reason) => {
    console.log(reason)
  })
})

router.get('/student/new', (req, res) => {
  res.render('newstudent.html')
})
router.post('/student/new', (req, res) => {
  Student.save(req.body).then((value) => {
    console.log(value)
    res.redirect('/')
  }).catch((reason) => {
    console.log(reason)
  })
})
//渲染edit页面
router.get('/student/edit', (req, res) => {
  Student.singleData(req.query, (err,value) => {
    if(err){
      return res.status(500).send('Sever error')
    }
    res.render('edit.html', {
      value
    })
  })
})
//渲染页面post提交
router.post('/student/edit', (req, res) => {
  Student.upData(req.body, (err) => {
    if(err){
      return res.status(500).send('Sever error')
    }
  })
  res.redirect('/')
  // console.log(req.body)
})
router.get('/student/delete', (req, res) => {
  Student.Delete(req.query).then((value) => {
    console.log(value)
    res.redirect('/')
  }).catch((reason) => {
    console.log(reason)
  })
})
//导出路由
module.exports = router;