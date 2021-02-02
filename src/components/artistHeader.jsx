import React from 'react';
import './scss/artistHeader.css';

import { Menu } from '../svg/svgExporter';

let ArtistHeader = props => {

  let {
    name,
    ArtistImage,
    showMenu,
    setShowMenu
  } = props;

  return (
    <div className="artist-header">

      {/* <div className="info-button">
        <i>i</i>
      </div> */}

      <div className="menu"
        onClick={() => setShowMenu(true)}
      >
        <img src={Menu} alt="menu-icon" />
      </div>

      <div className="image-container">
        <img src={ArtistImage} alt="artist" />
      </div>

      <div className="artist-name-header">{name}</div>

      {/* <div className="header-button-container">
          <div className="header-button">Play All</div>
      </div> */}
    </div>
  )
}

export default ArtistHeader;