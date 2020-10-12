const PENDING = 'PENDING',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {

    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.onFulfilledCallback = []
    this.onRejectedCallback = []

    const fulfilled = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCallback.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallback.forEach(fn => fn())
      }
    }
    try {
      executor(fulfilled, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
    if (this.status === PENDING) {
      this.onFulfilledCallback.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallback.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

module.exports = MyPromise