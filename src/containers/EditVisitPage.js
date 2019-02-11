import React, { Component } from 'react';
import ArtworksList from './ArtworksList';
import ArtDetails from '../components/ArtDetails';
import SearchContainer from './SearchContainer';

class EditVisitPage extends Component {
  // state = {
  //   currentVisit: this.props.currentVisit
  // }

  // componentDidMount() {
  //   let visit = this.props.allVisits.find(visit => visit.id === this.props.currentVisitId)
  //   this.setState({
  //     currentVisit: visit
  //   })
  //   console.log(this.state.currentVisit)
  // }


  // setVisitArtworks = (visitId) => {
  //   let visit = this.state.allVisits.find(visit => visit.id === parseInt(visitId))
  // }
  // this.setVisitArtworks(visitIdInUrl)

  render() {
    return (
      <div className="ui grid">
        <h1>EditVisitPage</h1>
        <h3>My list:</h3>
        <div className="vertical-scroll">
          { this.props.currentVisit ?
            <ArtworksList artworkArray={this.props.currentVisit.artworks}/> : null
          }
        </div>

        <div className="six wide column">
          <ArtDetails />
        </div>

        <div className="ten wide column">
          <SearchContainer artworkArray={this.props.allArtwork}/>
        </div>
      </div>
    );
  }
}

export default EditVisitPage;
