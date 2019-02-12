import React, { Component } from 'react';
import UserArtworksList from './UserArtworksList';
import ArtDetails from '../components/ArtDetails';
import SearchContainer from './SearchContainer';

class EditVisitPage extends Component {
  state = {
    currentArtwork: {}
  }

  handleArtworkClick = (artworkObj) => {
    this.setState({
      currentArtwork: artworkObj
    })
  }

  handleClearArtDetails = () => {
    this.setState({
      currentArtwork: {}
    })
  }


  render() {
    return (
      <div className="ui grid">
        <h1>EditVisitPage</h1>
        <h3>My list:</h3>
        <div className="vertical-scroll">
          { this.props.currentVisit ?
            <UserArtworksList
              artworkArray={this.props.currentVisit.artworks}
              handleArtworkClick={this.handleArtworkClick}
            />
          :
            null
          }
        </div>

        <div className="six wide column">
          <ArtDetails
            currentVisit={this.props.currentVisit}
            currentArtwork={this.state.currentArtwork}
            handleAddArtwork={this.props.handleAddArtwork}
            handleClearArtDetails={this.handleClearArtDetails}
            handleRemoveArtwork={this.props.handleRemoveArtwork}
          />
        </div>

        <div className="ten wide column">
          <SearchContainer
            artworkArray={this.props.allArtwork}
            handleArtworkClick={this.handleArtworkClick}
          />
        </div>
      </div>
    );
  }
}

export default EditVisitPage;
