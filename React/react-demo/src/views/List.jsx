import React, { Component } from 'react';


class List extends Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
  }

  render() {
    
    return (
      <h2>list-{this.props.match.params.id}</h2>
    );
  }
}

export default List;