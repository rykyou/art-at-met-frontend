import React, { Component } from 'react';
import VisitsList from './VisitsList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <VisitsList currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default HomePage;
