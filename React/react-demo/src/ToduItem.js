import React, { Component, Fragment } from 'react';


class ToduItem extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          {
            this.props.list.map((item, index) => <li key={index} onClick={() => this.handleItem(index)}>{item}</li>)
          }
        </ul>
      </Fragment>
    );
  }
  handleItem = (index) => {
    this.props.handleDel(index)
  }
}
 
export default ToduItem;
