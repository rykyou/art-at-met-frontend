import React, { Component } from 'react';
import FavoritesList from './FavoritesList';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
          <FavoritesList currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default ProfilePage;
