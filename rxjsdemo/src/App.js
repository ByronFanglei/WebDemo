import React, { PureComponent } from 'react'
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, combineLatest, SubscriptionLike, PartialObserver } from 'rxjs'
import { take, filter, map, debounceTime } from 'rxjs/operators'
class App extends PureComponent{

  _handleButton = () => {
    interval(500)
    .pipe(take(10))
    .pipe(map(x => x * 10))
    .pipe(filter(x => x > 55))
    .subscribe(console.log)
  }

  _cancleButton = () => {
    alert('取消订阅关系')
    // 取消订阅关系
    this.sub1$.unsubscribe()
    this.sub2$.unsubscribe()
    console.log(this.subject)
  }

  componentDidMount() {
    // interval(500).pipe(take(5)).subscribe(console.log)
  }

  componentWillUnmount() { 
    var button = document.querySelector('button')
    button.removeEventListener('click', this._handleButton)
  }
  
  render() {
    return(
      <div>
        <button onClick={this._handleButton}>Hello</button>
        <button onClick={this._cancleButton}>cancle</button>
      </div>
    )
  }
}

export default App