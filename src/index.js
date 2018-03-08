import React, { Component } from 'react';
import UsageRules from './components/usageRules.js';
import style from './styles/style.css';

class MyComponent extends Component {

  showRules(){
    if (this.props.showRules) {
      return <UsageRules moduleTitle="MyComponent" rules={[ 'Rule One', 'Rule Two' ]} />
    }
  }

  render(){
    return (
      <div>
        { this.showRules() }
        <h1>{ this.props.text }</h1>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  text: "This is an h1",
  showRules: true
}

export default MyComponent;
