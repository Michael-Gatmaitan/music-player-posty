import React from 'react';
import './scss/artistHeader.css';

let ArtistHeader = props => {

  let { ArtistImage } = props;

  return (
    <div className="artist-header">

      {/* <div className="info-button">
        <i>i</i>
      </div> */}

      <div className="menu"></div>

      <div className="image-container">
        <img src={ArtistImage} alt="artist" />
      </div>

      <div className="artist-name-header">{props.name}</div>

      {/* <div className="header-button-container">
          <div className="header-button">Play All</div>
      </div> */}
    </div>
  )
}

export default ArtistHeader;