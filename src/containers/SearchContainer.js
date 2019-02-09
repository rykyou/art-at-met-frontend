import React, { Component } from 'react';
import ArtworksList from './ArtworksList';
import SearchForm from '../components/SearchForm';

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <h1>SearchContainer</h1>
        <SearchForm />
        <h3>All art:</h3>
        <ArtworksList />
      </div>
    );
  }
}

export default SearchContainer;
