import React from 'react';

const ArtCard = ({artwork, handleArtworkClick}) => {
  return (

      <div className="ui card" onClick={() => handleArtworkClick(artwork)}>
          <div className="image">
            <img src={artwork.img_small} alt={artwork.title}/>
          </div>
          <div className="content">
            <div className="header">{artwork.title}</div>
            <div className="meta">
              <a>{artwork.artist_name}, {artwork.object_date}</a>
            </div>
            <div className="description">
              <p>{artwork.medium}</p>
              <p>{artwork.dimensions}</p>
            </div>
          </div>
      </div>




  )
}

export default ArtCard
