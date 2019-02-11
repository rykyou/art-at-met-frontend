import React from 'react'
import ArtCard from '../components/ArtCard'

class ArtworksList extends React.Component {

  render() {
    return (
      <div className="ui three column grid">
        {this.props.artworkArray.map(art => <ArtCard key={art.id} artwork={art}/>)}
      </div>
    )
  }
}

export default ArtworksList
