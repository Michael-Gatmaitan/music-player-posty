import React from 'react';
import './scss/artistHeader.css';
import { TimelineLite } from 'gsap';

import { Menu } from '../svg/svgExporter';

let ArtistHeader = props => {

  let {
    name,
    ArtistImage,
  } = props;

  return (
    <div className="artist-header">

      {/* <div className="info-button">
        <i>i</i>
      </div> */}

      <div className="menu"
        onClick={() => {
          let openMenu = new TimelineLite();

          openMenu.to(".menu-section", {
            duration:  0.1,
            top: 0,
            pointerEvents: "auto",
            opacity: 1,
            ease: "power3.inOut"
          });
          openMenu.staggerFromTo(".a-tag-onLink", .3, {
            opacity: 0,
            y: 30,
          }, {
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
          }, .1);

        }}
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