import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [
        {id: 1, title: 'one'},
        {id: 2, title: 'two'},
        {id: 3, title: 'three'},
      ]
    }
  }
  render() {
    const { list } = this.state
    return (
      <div>
        <h2>byron</h2>
        {
          list.map((item, index) => {
            return (
              <h2 key={index}>
                <Link to={`/list/${item.id}`}>{item.title}</Link>
              </h2>
            )
          })
        }
      </div>
    );
  }
}

export default Index;