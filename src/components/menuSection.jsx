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
import gsap, { TimelineLite } from 'gsap';

gsap.registerPlugin(TimelineLite);

let MenuSection = props => {

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
    <div className="menu-section">
      <div className="back"
        onClick={() => {

          let openMenu = new TimelineLite();

          openMenu.staggerFromTo(".a-tag-onLink", .3, {
            opacity: 1,
            y: 0,
          }, {
            opacity: 0,
            y: -30,
            ease: "power2.inOut",
          }, .1);
          openMenu.to(".menu-section", {
            duration: 0.1,
            top: "-40vh",
            pointerEvents: "none",
            opacity: 0,
            ease: "power3.inOut",
          }, "-=0.5");

        }}
      >
        <img src={Back} alt="back-icon" />
      </div>

      <ul className="menu-buttons">
        <li className="menu-btn">Main Project</li>
        <li className="menu-btn"><a href="#">About</a></li>
        <li className="source-code-con menu-btn">
          <a href="https://github.com/Michael-Gatmaitan/music-player-testing" target="_blank">
            <div className="source-code menu-btn">
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
            className={`${scLink.label.toLocaleLowerCase()} scButton menu-btn`}
            key={scLink.id}
            onMouseOver={() => {
              let scButtons = [...document.getElementsByClassName("scButton")];
              let bigLogo = [...document.getElementsByClassName("big-logo")];

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
            <a href={scLink.link} target="_blank" className="a-tag-onLink">
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