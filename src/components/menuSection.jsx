import React from 'react';
import './scss/menuSection.css';
import {
  Back,
  Github,
  Instagram,
  Facebook,
  Twitter,
  Snapchat,
  GithubB,
} from '../svg/svgExporter';

let MenuSection = props => {

  let {
    showMenu,
    setShowMenu,
    menuSection
  } = props;

  let scLinks = [
    {
      svg: Github,
      label: "Github",
      link: "https://www.github.com/Michael-Gatmaitan",
      id: 1
    }, {
      svg: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/mchlgtmtn/",
      id: 2
    }, {
      svg: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/michael.gatmaitan29/",
      id: 3
    }, {
      svg: Twitter,
      label: "Twitter",
      link: "https://www.twitter.com/MichaelGatmait3?s=09",
      id: 4
    }, {
      svg: Snapchat,
      label: "Snapchat",
      link: "https://www.snapchat.com/add/michaelcxz",
      id: 5
    }, 
  ]

  return (
    <div className="menu-section"
      ref={ menuSection }
      style={{
        top: showMenu ? "0" : "-60vh",
        pointerEvents: showMenu ? "auto" : "none",
        opacity: showMenu ? 1 : 0
      }}
    >
      <div className="back"
        onClick={() => setShowMenu(false)}
      >
        <img src={Back} alt="back-icon" />
      </div>

      <ul className="menu-buttons">
        <li>Main Project</li>
        <li><a href="#">About</a></li>
        <li className="source-code-con">
          <a href="https://www.github.com">
            <div className="source-code">
              <div>
                <img src={GithubB} alt="github_b-icon" width="30" />
                <span>Source Code</span>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <ul className="social-media-links">
        {scLinks.map(scLink => (
          <li
            className={`${scLink.label.toLocaleLowerCase()} scButton`}
            key={scLink.id}
            onMouseOver={() => {
              let scButtons = [...document.getElementsByClassName("scButton")];
              let bigLogo = [...document.getElementsByClassName("big-logo")];
              let hoveredButton = scButtons[scLink.id - 1];

              scButtons.forEach((scb, i) => {
                scb.style.opacity = i === (scLink.id - 1) ? 1 : 0.35;
              });

              bigLogo.forEach((bLogo, i) => {
                bLogo.style.opacity = i === (scLink.id - 1) ? 1 : 0;
              })
            }}

            onMouseLeave={() => {
              let scButtons = [...document.getElementsByClassName("scButton")];
              let bigLogo = [...document.getElementsByClassName("big-logo")];

              scButtons.forEach(scb => {
                scb.style.opacity = 1;
              })

              bigLogo.forEach(bLogo => {
                bLogo.style.opacity = 0;
              })
            }}
          >
            <a href={scLink.link}>
              <img src={scLink.svg} alt={`link No${scLink.id}`} width="30" />
              <span>{scLink.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="sc-big-logo">
        {scLinks.map((scLink, i) => (
          <img
            src={scLink.svg}
            alt={`big-logo${i}`}
            width="256"
            className={`big-logo ${scLink.label.toLocaleLowerCase()}-logo`}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuSection;