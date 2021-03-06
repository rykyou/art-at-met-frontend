import React from 'react'
import ArtCard from '../components/ArtCard'

class FavoritesList extends React.Component {

  favoriteArtworks() {
    return this.props.currentUser.artworks.map((art, i) => <ArtCard key={i} artwork={art}/>)
    // var artworkCountArr={};
    //
    // this.props.currentUser.artworks.forEach(function(artwork){
    //  if(!artworkCountArr[artwork]) artworkCountArr[artwork]=0;
    //  artworkCountArr[artwork]++;//increase
    // });
    //
    // var topauthors=Object.keys(artworkCountArr).map(artwork=>({artwork ,count:bookcountof[name]}));
    }

  render() {
    return (
      <div>
        <h2>My Favorites...</h2>
        <div className="ui cards">
          {!(this.props.currentUser.artworks === undefined) ? this.favoriteArtworks() : null}
        </div>
      </div>
    )
  }
}

export default FavoritesList
