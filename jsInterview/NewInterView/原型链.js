class Person {
  constructor(name) {
    this.name = name
  }
  eat () {
    console.log(`${this.name} 在吃饭`)
  }
}

class Son extends Person {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  say() {
    console.log(`${this.name}有${this.number}分数`)
  }
}

let son = new Son('byron', 100)
console.log(son.name, son.number)
son.eat()
son.say()

// console.log(typeof Person)
console.log(Person.prototype)
console.log(Son.prototype)
