import React from 'react'

class ArtDetails extends React.Component {
  handleAddArtworkClick = (currentArtwork, currentVisit) => {
    this.props.handleAddArtwork(currentArtwork, currentVisit)
    this.props.handleClearArtDetails()
  }

  handleRemoveArtworkClick = (currentArtwork, currentVisitId) => {
    this.props.handleRemoveArtwork(currentArtwork, currentVisitId)
    this.props.handleClearArtDetails()
  }


  buttons = () => {
    const { currentArtwork, currentVisit } = this.props

    if ((currentArtwork !== {}) && currentVisit.artworks.includes(currentArtwork)) {
      return (
        <div>
          <button
            className="ui button"
            onClick={() => console.log('attempting to edit')}
            >Update Notes
          </button>
          <button
            className="ui right button"
            onClick={() => this.handleRemoveArtworkClick(currentArtwork, currentVisit.id)}
            >Remove
          </button>
        </div>
    )} else {
      return (
        <div>
          <button
            className="ui button"
            onClick={() => this.handleAddArtworkClick(currentArtwork, currentVisit.id)}
            >Add
          </button>
        </div>
    )}
  }

  render() {
    const { currentArtwork } = this.props
    return (

      <div className="ui fluid card">
        <div className="image">
          <img src={currentArtwork.img_small} alt={currentArtwork.title} />
        </div>
        <div className="content">
          <h1 className="ui header spacing">{currentArtwork.title}</h1>

          {currentArtwork.artist_name ?
            <h3 className="ui header spacing">{currentArtwork.artist_name} ({currentArtwork.artist_bio})</h3>
          : null }

          <h3 className="ui dividing header"></h3>

          <h4>Date: {currentArtwork.object_date}</h4>
          <h4>Medium: {currentArtwork.medium}</h4>
          <h4>Dimensions: {currentArtwork.dimensions}</h4>
          <h4>Classification: {currentArtwork.classification}</h4>

        </div>
        <div className="extra content">
          {this.buttons()}
        </div>
      </div>

    )
  }
}

export default ArtDetails
