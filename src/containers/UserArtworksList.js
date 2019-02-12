import React from 'react'
import ArtCard from '../components/ArtCard'

class UserArtworksList extends React.Component {

  formattedDate = (date) => {
    let newDate = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return newDate.toLocaleDateString('en-US', options)
  }

  render() {
    return (
      <div>
        <h1 class="ui header">Artworks Visited on: {this.formattedDate(this.props.currentVisit.date)}</h1>
        <h3 class="ui header">{this.props.currentVisit.time_of_day}</h3>
        <div className="ui link cards">
          {this.props.artworkArray.map(art => <ArtCard
            key={art.id}
            artwork={art}
            handleArtworkClick={this.props.handleArtworkClick}
          />)}
        </div>
      </div>
    )
  }
}

export default UserArtworksList
