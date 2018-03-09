import React, { Component } from 'react';
import UsageRules from './components/usageRules.js';
import style from './styles/style.css';

class MyComponent extends Component {

  showRules(){
    if (this.props.showRules) {

      //////////////////////////////////////////////////////
      /// PLEASE POPULATE PROPS FOR UsageRules COMPONENT ///
      //////////////////////////////////////////////////////

      return <UsageRules
        moduleTitle="Name of Your Component"
        rules={[
          'Rule One',
          'Rule Two',
          'Rule Three'
        ]}
      />
    }
  }

  render(){
    return (
      <div style={{textAlign: 'center', borderBottom: '1px solid #eee'}}>
        { this.showRules() }
        <h1>{ this.props.text }</h1>
        <p>Subheading Subheading Subheading Subheading Subheading </p>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  text: "This is an h1",
  showRules: true
}

export default MyComponent;
