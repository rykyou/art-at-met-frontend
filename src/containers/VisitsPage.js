import React, { Component } from 'react';
import VisitsList from './VisitsList';

class VisitsPage extends Component {
  render() {
    return (
      <div>
        <h1>Visits Page</h1>
        <VisitsList currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default VisitsPage;
