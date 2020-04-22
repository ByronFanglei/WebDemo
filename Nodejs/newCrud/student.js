//操作数据
const fs = require('fs');
const dbjson = './db.json';

/*
读取文件封装
* name:读取文件
* callback：读取文件回调函数，err返回错误，data返回读取文件student的obj
*/
function Read(name, callback) {
  fs.readFile(name, 'utf8', (err, data) => {
    if (err) { callback(err) }
    callback(null, JSON.parse(data).students)
  })
}

//查找全部数据
exports.find = () => {
  return new Promise((resolve, reject) => {
    Read(dbjson, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    })
  })

}
//添加数据
exports.add = (addData) => {
  return new Promise((resolve, reject) => {
    Read(dbjson, (err, data) => {
      if (err) { reject(err) }
      addData.id = data.length > 0 ? data[data.length - 1].id + 1 : 0
      data.push(addData)
      const students = JSON.stringify({
        students: data
      })
      fs.writeFile(dbjson, students, (err) => {
        if (err) { reject(err) }
        resolve('添加成功！！！')
      })
    })
  })
}
//查找单个数据
exports.findId = (obj) => {
  return new Promise((resolve, reject) => {
    Read(dbjson, (err, data) => {
      if (err) { reject(err) }
      const findone = data.find((item) => {
        return item.id === parseInt(obj.id)
      })
      resolve(findone)
    })
  })
}

//更新数据
exports.upData = (obj) => {
  return new Promise((resolve, reject) => {
    obj.id = parseInt(obj.id)
    Read(dbjson, (err, data) => {
      if (err) { reject(err) }
      const udata = data.find((item) => {
        return item.id === obj.id
      })
      for (var key in obj) {
        udata[key] = obj[key]
      }
      const students = JSON.stringify({
        students: data
      })
      st = JSON.parse(students)
      fs.writeFile(dbjson, students, (err) => {
        if (err) { reject(err) }
        resolve('更新成功！！！')
      })
    })
  })
}
//删除数据
exports.Del = (obj) => {
  return new Promise((resolve, reject) => {
    Read(dbjson, (err, data) => {
      if(err) {reject(err)}
      const index = data.findIndex((item) => {
        return item.id === parseInt(obj.id)
      })
      data.splice(index, 1)
      const students = JSON.stringify({
        students: data
      })
      fs.writeFile(dbjson, students, (err) => {
        if (err) { reject(err) }
        resolve('删除成功！！！')
      })
    })
  })
}

