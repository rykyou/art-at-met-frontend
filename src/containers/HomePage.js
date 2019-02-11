import React, { Component } from 'react';
import VisitsList from './VisitsList';
import FavoritesList from './FavoritesList';
import VisitLogger from '../components/VisitLogger';

class HomePage extends Component {
  render() {
    return (
      <div className="ui grid">
        <h1>HomePage</h1>
        <div className="sixteen wide column">
          <VisitsList currentUser={this.props.currentUser} />
        </div>

        <div class="seven wide column">
          <FavoritesList currentUser={this.props.currentUser}/>
        </div>

        <div class="nine wide column">
          <VisitLogger createVisit={this.props.createVisit}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
