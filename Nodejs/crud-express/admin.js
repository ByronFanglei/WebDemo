const express = require('express');
const fs = require('fs');
const app = express();
app.engine('html', require('express-art-template'))
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.get('/', (req, res) => {
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    if(err){
      return res.status(500).send('sever报错')
    }
    const students = JSON.parse(data).students
    res.render('index.html', {
      students
    })
  })
  
})

app.listen('5000', () => {
  console.log('服务已连接：http:127.0.0.1:5000');
})