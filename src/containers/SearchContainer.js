import React, { Component } from 'react';
import AllArtworksList from './AllArtworksList';
import SearchForm from '../components/SearchForm';

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <h1>SearchContainer</h1>
        <SearchForm />
        <h3>All art:</h3>
        <div className="horizontal-scroll">
          <AllArtworksList
            artworkArray={this.props.artworkArray}
            handleArtworkClick={this.props.handleArtworkClick}
          />
        </div>
      </div>
    );
  }
}

export default SearchContainer;
