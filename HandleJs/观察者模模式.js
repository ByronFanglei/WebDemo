// 被观察者
class Subject {
  constructor(name, state) {
    this.name = name,
    this.state = state,
    this.observers = [] // 存放观察者
  }
  // 被观察者提供一个接收观察者的方法
  attach(observer) {
    this.observers.push(observer)
  }
  // 修改观察者的状态
  setState(newState) {
    this.state = newState
    this.observers.forEach(obs => obs.upDate(this.state))
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  // 观察者接收被观察者状态
  upDate(state) {
    console.log(`${this.name}发现目标${state}`)
  }
}

let s = new Subject('被观察者', '状态良好')
let o1 = new Observer('观察者one')
let o2 = new Observer('观察者two')
s.attach(o1) // 被观察者添加观察者1
s.attach(o2) // 被观察者添加观察者2
s.setState('状态爆炸') // 被观察者修改状态