// 简单文件写入
// fs.writeFile(file, data[, options], callback)
  // file：要操作的文件路径
  // data：要写入的数据
  // options：选项，可以对文件进行编码，模式，读写的设置
  // callback：当写入完成以后执行的函数

  const fs = require('fs');
  fs.writeFile('C:/Users/Byron_wd552ub/Desktop/list.json','["hello","byron","Nodejs"]',{flag:'w'},function(err){
    if(!err){
      console.log('写入成功');
    }else{
      console.log('写入失败');
    }
  })