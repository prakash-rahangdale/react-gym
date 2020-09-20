import React, { Component } from 'react';
 
class Gym extends Component {
  render() {
    return (
      <div className="gym">
        <h2>{ this.props.meta.model }</h2>
      <div><img width="100%" src={ this.props.meta.picture } alt="" /></div>
      </div>
    );
  }
}
 
export default Gym;