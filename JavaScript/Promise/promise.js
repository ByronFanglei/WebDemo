/*
 *自定义promise函数:IIFE
 */

(function (window) {
  /**
   * Promise构造函数
   * excutor：执行器函数（同步）
   */
  function Promise(excutor) {
    // 将当前promise对象保存起来
    const self = this
    self.status = 'pending' // 给promise对象指定status属性，初始值为pending
    self.data = undefined // 给promise对象指定一个用于存储结果数据的属性
    self.callbacks = [] // 每个元素的结构：{ onResolved() {}, onRejected() {} }
    function resolve(value) {
      // 判断当前状态是否为pending
      if (self.status !== 'pending') {
        return
      }
      // 修改状态为resolve
      self.status = 'resolved'
      // 保存value数据
      self.data = value
      // 如果有待执行的callback函数,立即异步执行回调函数
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach(callback => {
            callback.onResolved(value)
          })
        })
      }
    }

    function reject(reason) {
      if (self.status !== 'pending') {
        return
      }
      self.status = 'rejected'
      self.data = reason
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach(callback => {
            callback.onRejected(reason)
          })
        })
      }
    }
    // 立即同步执行excutor1,如果有异常则直接onRejected
    try {
      excutor(resolve, reject)
    } catch (error) { // 如果执行器抛出异常，promise对象变为rejected状态
      reject(error)
    }
  }

  /**
   * Promise原型对象的then()方法
   * 指定成功和失败的回调函数，函数的返回值为新的promise对象
   */
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this
    // 假设当前状态还是pending状态，将回调函数保存起来
    self.callbacks.push({
      onResolved,
      onRejected
    })
  }
  /**
   * Promise原型对象的catch()方法
   * 指定失败的回调函数，函数的返回值为新的promise对象
   */
  Promise.prototype.catch = function (onRejected) {

  }
  /**
   * Promise函数对象resolve方法
   * 返回一个指定结果的成功的promise
   */
  Promise.resolve = function (value) {

  }
  /**
   * Promise函数对象reject方法
   * 返回一个指定结果的失败的promise
   */
  Promise.reject = function (reason) {

  }
  /**
   * Promise函数对象all方法
   * 返回一个promise，只有当所有promise都成功时才成功。否则失败
   */
  Promise.all = function (promises) {

  }
  /**
   * Promise函数对象race方法
   * 返回一个最先执行完成的promise，无论成功与失败
   */
  Promise.race = function (promises) {

  }
  
  // 将自定义promise抛出
  window.Promise = Promise
})(window)