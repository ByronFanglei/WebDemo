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
//插入数据
// const user = new User({
//   username: 'byron',
//   password: '123',
//   email: '123456@qq.com'
// })
// user.save().then((value) => {
//   console.log(`value:${value}`)
// }).catch((reason) => {
//   console.log(`reason:${reason}`)
// })

//查询所有数据
// User.find().then((value) => {
//   console.log(`查询成功：${value}`)
// }).catch((reason) => {
//   console.log(`查询失败：${reason}`)
// })
//根据条件查询 返回的是数组
// User.find({
//   username: 'byron'
// }).then((value) => {
//   console.log(`查询成功：${value}`)
// }).catch((reason) => {
//   console.log(`查询失败：${reason}`)
// })
//只找匹配的第一个符合条件的,如果没有条件查找第一条数据，返回一个对象
// User.findOne({
//   username: 'byron'
// }).then((value) => {
//   console.log(value)
// }).catch((reason) => {
//   console.log(`查询失败：${reason}`)
// })

//删除数据
// User.deleteOne({
//   username: 'byron'
// }).then((value) => {
//   console.log(`删除成功：${value}`)
// }).catch((reason) => {
//   console.log(`删除失败：${reason}`)
// })

//更新数据.findByIdAndUpdate：返回更新前数据
User.findByIdAndUpdate('5ea0577aafeab028140e3e14', {
  password: 'byron'
}).then((value) => {
  console.log(`更新成功：${value}`)
}).catch((reason) => {
  console.log(`删除失败：${reason}`)
})
