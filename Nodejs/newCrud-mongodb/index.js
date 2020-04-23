const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.engine('html', require('express-art-template'));
app.use('/public/', express.static('./public'));
app.use('/node_modules/', express.static('./node_modules'));

app.use(router)

app.listen('5555', () => {
  console.log('服务已开启， http:127.0.0.1:5555')
})