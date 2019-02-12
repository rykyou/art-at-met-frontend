import React, { Component } from 'react';
import VisitsList from './VisitsList';
import VisitLogger from '../components/VisitLogger';

class HomePage extends Component {
  render() {
    return (
      <div className="ui grid">
      
        <div className="sixteen wide column">
          <VisitLogger createVisit={this.props.createVisit}/>
        </div>
        <div className="sixteen wide column">
          <VisitsList
            currentUser={this.props.currentUser}
            handleDeleteVisit={this.props.handleDeleteVisit}
            setCurrentVisit={this.props.setCurrentVisit}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
