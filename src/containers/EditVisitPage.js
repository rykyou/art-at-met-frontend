import React, { Component } from 'react';
import ArtworksList from './ArtworksList';
import ArtDetails from '../components/ArtDetails';
import SearchContainer from './SearchContainer';

class EditVisitPage extends Component {
  render() {
    return (
      <div>
        <h1>EditVisitPage</h1>
        <h3>My list:</h3>
        <ArtworksList />
        <ArtDetails />
        <SearchContainer />
      </div>
    );
  }
}

export default EditVisitPage;
