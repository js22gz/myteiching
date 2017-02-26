import React, { Component } from 'react';
import { LoginLink } from 'react-stormpath';


export default class ContextExample extends React.Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  render() {
    if (!this.context.authenticated) {
      console.log("Test");
      return (
        <div>
          You need to <LoginLink />.
        </div>
      );
    }

    console.log("TestING2: "+this.context.toString());
    var propValue;
    var nyc = this.context;
    for(var propName in nyc) {
    propValue = nyc[propName]
    console.log(propName,propValue);
    }

    return (
      <div>
        Welcome {this.context.user.username}!
      </div>
    );
  }
}
