const fs = require('fs');
// fs.existsSync(path)：检查一个文件是否存在,返回boolean
// const flag = fs.existsSync('hell.txt');
// console.log(flag);

// fs.stat(path[, options], callback) | fs.statSync(path[, options]) ：获取文件状态，这个对象中保存了当前对象状态的相关信息
// fs.stat('hello.txt', (err, stat) => {
//   if(!err){
//     //size：文件大小
//     //isFile():是否是一个文件
//     //isDirectory():是否是一个文件夹
//     console.log(stat.isDirectory());
//   }
// })

// fs.unlink(path, callback) | fs.unlinkSync(path):删除文件
// fs.unlink('hello6.txt', (err) => {
//   if(!err){
//     console.log('删除成功');
//   }
// })

// fs.readdir(path[, options], callback(err,files)) | fs.readdirSync(path[, options])：读取一个目录的目录结构
// fs.readdir('.', (err, files) => {
//   if(!err){
//     console.log(files);
//   }
// })

// fs.truncate(path[, len], callback) | fs.truncateSync(path[, len])：截断文件，将文件修改为指定大小
// fs.truncate('hello.txt', 5, (err) => {
//   if(!err){
//     console.log('截断成功');
//   }
// })

// fs.mkdir(path[, options], callback) | fs.mkdirSync(path[, options])：创建一个文件夹
// fs.mkdir('hello6.txt', (err) => {
//   if(!err){
//     console.log('创建成功')
//   }
// })

// fs.rmdir(path[, options], callback) | fs.rmdirSync(path[, options])：删除一个文件夹
// fs.rmdir('hello6.txt',(err) => {
//   if(!err){
//     console.log('删除成功')
//   }
// })

// fs.rename(oldPath, newPath, callback) | fs.renameSync(oldPath, newPath)：对文件重新命名
// oldPath：旧的路径
// newPath：新的路径
// callback：回调函数
// fs.rename('hello5.txt','../hello5.txt', (err) => {
//   if(!err){
//     console.log('修改成功');
//   }else {
//     console.log(err);
//   }
// })

// fs.watchFile(filename[, options], listener)：监视文件的修改
// filename：要监事的文件
// options：配置选项
// listener：回调函数，当文件发生变化时
  // curr:当前文件状态，stats对象
  // prev：修改前文件的状态stats对象
fs.watchFile('hello.txt',(curr,prev) => {
  console.log(curr.size)
  console.log(prev.size)
})




