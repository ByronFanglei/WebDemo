// 引入其他模块
//   通过require()函数来引入其他模块
//   require()传递一个文件的路径作为参数，node会根据路径自动引入外部模块，
//   使用require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块

  // 核心模块：由node引擎提供的模块
  // 文件模块：由用户自己创建的模块

// var md = require('./hello.js');
// var fs = require('fs');
// console.log(md);
// console.log(fs);

// 在node中有一个global，它的作用和网页中的window类似，在全局创建的变量/函数都会作为global的属性保存
// console.log(global)
// arguments.callee:保存的是当前执行的函数对象
// console.log(arguments.callee + '');

// exports:该对象用来将变量或函数暴露到外部
// require:函数，用来引入外部的模块
// module:代表当前模块的本身，exports就是module的属性
// __filename:当前模块的完整路径
// __dirname:当前模块所在文件夹的完整路径