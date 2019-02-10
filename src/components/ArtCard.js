import React from 'react';

const ArtCard = ({artwork}) => {
  return (
    <div className="" onClick={() => console.log('clicked ArtCard!')}>
      <h3>{artwork.title}</h3>
      <img src={artwork.img_small} alt={artwork.title}/>
    </div>
  )
}

export default ArtCard
