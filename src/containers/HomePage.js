import React, { Component } from 'react';
import VisitsList from './VisitsList';
import FavoritesList from './FavoritesList';
import VisitLogger from '../components/VisitLogger';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <VisitsList currentUser={this.props.currentUser} />
        <FavoritesList currentUser={this.props.currentUser}/>
        <VisitLogger />
      </div>
    );
  }
}

export default HomePage;
