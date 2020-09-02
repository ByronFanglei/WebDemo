const Test = {
  name: 'byron',
  say() {
    console.log(this)
  },
  set1() {
    setTimeout(() => {
      console.log(this)
    })
  },
  set2() {
    setTimeout(function() {
      console.log(this)
    })
  }
}

Test.say()
Test.set1()
Test.set2()
