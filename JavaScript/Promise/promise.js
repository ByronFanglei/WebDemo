/*
自定义promise函数
*/

(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  /*
  Promise构造函数
  excutor：执行器函数
  */
  function Promise(excutor) {
    const self = this;
    self.status = PENDING      //给promise对象指定一个status属性，初始值为pending
    self.data = undefined       //给promise对象指定一个用于存储结果数据的属性
    self.callbacks = []         //给每个元素的结构：{onResolved() {}, onRejected() {}}
    function resolve(value) {
      //判断当前status是否为pending状态
      if (self.status !== PENDING) {
        return;
      }

      //修改当前status状态为resolved
      self.status = RESOLVED;
      //存储当前的数据value
      self.data = value;
      //如果有callback函数，立即异步执行回调函数onResolved
      if (self.callbacks.length > 0) {
        setTimeout(() => {  //放入队列中执行所有成功的回调
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value);
          })
        })
      }
    }

    function reject(reason) {
      //判断当前status是否为pending状态
      if (self.status !== PENDING) {
        return;
      }

      //修改当前status状态为rejected
      self.status = REJECTED;
      //存储当前的数据reason
      self.data = reason;
      //如果有callback函数，立即异步执行回调函数onRejected
      if (self.callbacks.length > 0) {
        setTimeout(() => {  //放入队列中执行所有失败的回调
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason);
          })
        })
      }
    }

    //立即同步执行excutor,
    try {
      excutor(resolve, reject);
    } catch (error) {   //如果执行器抛出异常，则执行reject，promise对象变为rejected状态
      reject(error)
    }
  }

  /*
  Promise原型对象的then()
  指定成功和失败的回调函数
  返回一个新的promise对象
  */
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => {
      if (self.status === PENDING) {
        // 假设当前状态为pending状态，将回调函数保存起来
        self.callbacks.push({
          onResolved,
          onRejected
        })
      }else if(self.status === RESOLVED){
        setTimeout(() => {
          /*
          1、如果抛出异常，return的promise就会失败，reason就是error
          2、如果回调函数返回的不是promise，return的promise就会成功，value就是返回值
          3、如果回调函数返回的是promise，return的promise结果就是promise的结果
          */
         try{
          const result = onResolved(self.data);
          if(result instanceof Promise){
            // 3、如果回调函数返回的是promise，return的promise结果就是promise的结果
            result.then(
              value => resolve(value),  //当result成功时，让return的promise也成功
              reason => reject(reason)  //当result失败时，让return的promise也失败
            )
            // result.then(resolve, reject) //简化上述代码
          }else{
            // 2、如果回调函数返回的不是promise，return的promise就会成功，value就是返回值
            reject(result);
          }
         } catch(error) {
          // 1、如果抛出异常，return的promise就会失败，reason就是error
           reject(error);
         }
        })
      }else{  //rejected
        setTimeout(() => {
          onRejected(self.data)
        })
      }
    })

  }

  /*
  Promise原型对象的catch()
  指定失败的回调函数
  返回一个新的promise对象
  */
  Promise.prototype.catch = function (onRejected) {

  }

  /*
  Promise函数对象的resolve方法
  返回结果指定的一个成功的promise
  */
  Promise.resolve = function (value) {

  }

  /*
  Promise函数对象的reject方法
  返回结果指定的一个失败的promise
  */
  Promise.reject = function (reason) {

  }

  /*
  Promise函数对象的all方法
  返回一个promise，只有所有promise成功才成功，反之失败
  */
  Promise.all = function (promises) {

  }

  /*
  Promise函数对象的race方法
  返回一个promise，其结果油由第一个完成的promise决定  */
  Promise.race = function (promises) {

  }



  // 向外暴露Promise函数
  window.Promise = Promise;

})(window)