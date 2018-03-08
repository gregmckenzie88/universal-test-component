import React, { Component } from "react";

class usageRules extends Component {
  renderList(){
    if(this.props.rules.length > 0){
      return (
        <ul className="usage-rules__list">
          {this.props.rules.map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
      );
    }
  }
  render(){
    return (
      <div className="usage-rules">
        <div className="container">
          <h2 className="usage-rules__headline">USAGE RULES</h2>
          <h3>{ this.props.moduleTitle }</h3>
          { this.renderList() }
        </div>
      </div>
    );
  }
}

usageRules.defaultProps = {
  moduleTitle: "Module Title",
  rules: ['Rule 1', 'Rule 2']
}

export default usageRules;
