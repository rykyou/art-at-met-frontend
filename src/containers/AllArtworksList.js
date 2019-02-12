import React from 'react'
import ArtCard from '../components/ArtCard'

class AllArtworksList extends React.Component {

  render() {
    return (
      <div className="ui link cards">
        {this.props.artworkArray.map(art => <ArtCard
          key={art.id}
          artwork={art}
          handleArtworkClick={this.props.handleArtworkClick}
        />)}
      </div>
    )
  }
}

export default AllArtworksList
