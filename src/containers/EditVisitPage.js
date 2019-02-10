import React, { Component } from 'react';
import ArtworksList from './ArtworksList';
import ArtDetails from '../components/ArtDetails';
import SearchContainer from './SearchContainer';

class EditVisitPage extends Component {
  state = {
    allArtwork: [],
    usersArtwork: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/artworks')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allArtwork: data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>EditVisitPage</h1>
        <h3>My list:</h3>
        <ArtworksList artworkArray={this.state.usersArtwork}/>
        <ArtDetails />
        <SearchContainer artworkArray={this.state.allArtwork}/>
      </div>
    );
  }
}

export default EditVisitPage;
