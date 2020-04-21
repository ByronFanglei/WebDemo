//操作文件中的数据
const fs = require('fs');
const dbjson = './db.json';
// 渲染首页
exports.find = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbjson, 'utf8', (err, data) => {
      if (err) { reject(err) }
      resolve(JSON.parse(data).students)
    })
  })
}
// 保存数据
exports.save = (newdata) => {
  return new Promise((resolve, reject) => {
    //打开文件获取数据
    fs.readFile(dbjson, 'utf8', (err, data) => {
      if (!err) {
        const odata = JSON.parse(data).students
        newdata.id = odata.length > 0 ? odata[odata.length - 1].id + 1 : 1
        // //push数据
        odata.push(newdata)
        const sdata = JSON.stringify({
          students: odata
        })
        // //写入数据
        fs.writeFile(dbjson, sdata, (err) => {
          if (!err) {
            resolve('添加成功')
          } else {
            reject(err)
          }
        })
        // console.log(sdata)
      } else {
        reject(err)
      }
    })
  })
}
//查找数据
exports.singleData = (obj, callback) => {
  fs.readFile(dbjson, 'utf8', (err, data) => {
    if (!err) {
      const odata = JSON.parse(data).students;
      const id = parseInt(obj.id)
      const siblg = odata.find((item) => {
        return item.id === id
      })
      callback(null, siblg)
    } else {
      callback(err)
    }
  })
}
//更新数据
exports.upData = (obj, callback) => {
  //读取json文件
  fs.readFile(dbjson, 'utf8', (err, data) => {
    if(err){
      callback(err)
    }
    //将post中的id转换为number
    obj.id = parseInt(obj.id)
    //json文件转换为对象并获取students对象
    const students = JSON.parse(data).students
    //查找与post中id相同的数据
    const udata = students.find((item) => {
      return item.id === obj.id
    })
    //替换数据内容，替换后数据还在students中保存
    for(var key in udata){
      udata[key] = obj[key]
    }
    //将json数据转为字符串
    const sdata = JSON.stringify({
      students
    })
    //写入文件
    fs.writeFile(dbjson, sdata, (err) => {
      if(err){
        callback(err)
      }
      console.log('更新成功')
    })
  })
}
//删除数据
exports.Delete = (obj) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbjson, (err, data) => {
      if(err){
        reject(err)
      }
      const odata = JSON.parse(data).students;
      const index = odata.findIndex((item) => {
        return item.id === parseInt(obj.id)
      })
      odata.splice(index, 1)
      const sdata = JSON.stringify({
        students: odata
      })
      fs.writeFile(dbjson, sdata , (err) => {
        if(err){
          reject(err)
        }
        resolve('删除成功')
      })
    })
  })
}