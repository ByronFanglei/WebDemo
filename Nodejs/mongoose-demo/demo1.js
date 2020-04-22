//引入模块
const mongoose = require('mongoose')
//连接数据库itcast
//指定连接的数据库不需要存在，当你插入第一条数据的时候就会自动创建出来
mongoose.connect('mongodb://localhost/itcast');
//1、设计集合及结构（表结构），字段名称就是表结构中属性名称，值
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true //必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});
//2、将文档结构发布为模型
// 第一个参数：传入单数名词作为表名信息，mongoose会自动将表明信息转换为小写复数 eg：User => users
// 第二个参数：架构（表结构）Schema
const User = mongoose.model('User', userSchema)
//3、当创建好模型后，就可以使用该构造函数对表进行操作
const user = new User({
  username: 'admin',
  password: '123456',
  email: '123456@gmail.com'
})
//插入数据
user.save().then((value) => {
  console.log(`value:${value}`)
}).catch((reason) => {
  console.log(`reason:${reason}`)
})
