import React from 'react'

class ArtDetails extends React.Component {
  handleAddArtworkClick = (currentArtwork, currentVisit) => {
    this.props.handleAddArtwork(currentArtwork, currentVisit)
    this.props.handleClearArtDetails()
  }

  buttons = () => {
    if ((this.props.currentArtwork !== {}) && this.props.currentVisit.artworks.includes(this.props.currentArtwork)) {
      return (
        <div>
          <button className="ui right button"
              onClick={() => console.log('attempting to edit')}>Update Notes</button>
          <button className="ui right button" onClick={() => console.log('attempting to delete')}>Remove</button>
        </div>
    )} else {
      return (
        <div>
          <button className="ui right button"
            onClick={() => this.handleAddArtworkClick(this.props.currentArtwork, this.props.currentVisit.id)}>Add</button>
        </div>
    )}
  }

  render() {
    return (
      <div>
        <h1>ArtSpecs</h1>
        <div>
          <img src={this.props.currentArtwork.img_small} alt={this.props.currentArtwork.title}/>
          {this.buttons()}
        </div>
      </div>
    )
  }
}

export default ArtDetails
