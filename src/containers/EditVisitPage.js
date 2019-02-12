import React, { Component } from 'react';
import UserArtworksList from './UserArtworksList';
import ArtDetails from '../components/ArtDetails';
import SearchContainer from './SearchContainer';

class EditVisitPage extends Component {
  state = {
    currentArtwork: null
  }

  handleArtworkClick = (artworkObj) => {
    this.setState({
      currentArtwork: artworkObj
    })
  }

  handleClearArtDetails = () => {
    this.setState({
      currentArtwork: null
    })
  }


  render() {
    return (
      <div className="ui grid">
        <div className="ui sixteen wide column segment">
          { this.props.currentVisit ?
            <UserArtworksList
              currentVisit={this.props.currentVisit}
              artworkArray={this.props.currentVisit.artworks}
              handleArtworkClick={this.handleArtworkClick}
            />
          :
            null
          }
        </div>

        <div className="five wide column segment">
          {this.state.currentArtwork ?
            <ArtDetails
              currentVisit={this.props.currentVisit}
              currentArtwork={this.state.currentArtwork}
              handleAddArtwork={this.props.handleAddArtwork}
              handleClearArtDetails={this.handleClearArtDetails}
              handleRemoveArtwork={this.props.handleRemoveArtwork}
            />
          : null }
        </div>

        <div className="eleven wide column segment">
          <h1 class="ui header">MET Collection</h1>
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
