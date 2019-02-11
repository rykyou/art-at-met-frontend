import React from 'react'

class ArtDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>ArtSpecs</h1>
        <div>
          <img src={this.props.currentArtwork.img_small} alt={this.props.currentArtwork.title}/>
          <button className="ui right button"
            onClick={() => this.props.handleAddArtwork(this.props.currentArtwork, this.props.currentVisit.id)}>Add</button>
        </div>
      </div>
    )
  }
}

export default ArtDetails
