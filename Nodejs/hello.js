// 模块化
//   在node中一个文件就是一个模块
//   在node中，每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域中，所以每一个模块中的变量在其他模块无法访问

// 通过exports来向外部暴露变量和方法，只需要将需要暴露给外部的变量或方法设置为exports的属性即可
// exports与module.exports区别：
// exports：只能使用点的方式向外暴露内部变量
// module.exports：既可以通过点的形式，也可以直接赋值
// exports.name = 'byron';
// exports.age = 23;
// exports.sayName = function() {
//   console.log('我是byron！')
// }

module.exports= {
  name: 'byron',
  age: 23
}