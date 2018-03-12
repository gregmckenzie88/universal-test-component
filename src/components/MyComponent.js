import React, { Component } from 'react';

class MyComponent extends Component {
  render(){
    return (
      <div style={{textAlign: 'center', borderBottom: '1px solid #eee'}}>
        <h1>{ this.props.heading }</h1>
        <p>{ this.props.subheading } </p>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  heading: "This is a heading",
  subheading: "This is a subheading",
  showRules: true
}


export default MyComponent;
