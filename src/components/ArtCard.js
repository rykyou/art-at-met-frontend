import React from 'react';

const ArtCard = (props) => {
  return (
    <div className="" onClick={() => console.log('clicked ArtCard!')}>
      <h3>{props.artwork.title}</h3>
    </div>
  )
}

export default ArtCard
