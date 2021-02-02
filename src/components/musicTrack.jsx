import React from 'react';
import './scss/musicTrack.css';

let MusicTrack = props => {

  let {
    artistName,
    compiledMusicData,
    showTrack,
    setShowTrack,
    playing,
    seconds,
    duration,
    PlayV,
    PauseV
  } = props;

  let {
    title,
    album,
    ft,
    albumTBL,
  } = compiledMusicData;

  let closeTrack = () => {
    setShowTrack(!showTrack);
    let bottomPlayer =
    document.getElementsByClassName("bottom-player")[0];
    let { body } = document;

    bottomPlayer.style.bottom = 0;
    bottomPlayer.style.opacity = 1;
    body.style.overflow = "auto";
  }

  let stateHandler = () => {
    let player = document.getElementsByTagName("audio")[0];
    playing ? player.pause() : player.play();
  }

  let startDurationFormat = {
    STminutes: Math.floor(seconds / 60).toLocaleString(),
    STseconds: Math.ceil(seconds % 60).toLocaleString(),
  }

  let totalDurationFormat = {
    TDminutes: (Math.floor(duration / 60)).toLocaleString(),
    TDseconds: (Math.ceil(duration % 60)).toLocaleString(),
  };

  let { STminutes, STseconds } = startDurationFormat;
  let { TDminutes, TDseconds } = totalDurationFormat;

  return (
    <div className="music-track"
      style={{
        bottom: showTrack ? "0" : 'calc(-100vh + 78px)',
        opacity: showTrack ? 1 : 0,
        pointerEvents: showTrack ? 'all' : 'none'
      }}
    >

      <div className="track-closer" onClick={ closeTrack }>
        <div className="arm" />
      </div>

      <div className="track-album">
         Playing from {artistName}'s Album<br/>
         <div>{album}</div>
      </div>

      <div className="track-album-thumbnail">
        <img src={albumTBL} alt="track-album-thumbnail-large" />
      </div>

      <div className="track-song-info">
        <div className="track-title">
          {title}
        </div>
        <div className="track-ft">
          {ft === 'Unknown' ? artistName : `ft. ${ft}`}
        </div>
      </div>

      <div className="track-duration">

        <div className="duration-progress">
          <div className="progress-container">
            <div className="progress-highlight"
              style={{
                width: `${(seconds / duration) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="duration-minutes">
          <div className="start">
            {STminutes.length === 1 ? `0${STminutes}` : `${STminutes}`}
            :
            {STseconds.length === 1 ? `0${STseconds}` : `${STseconds}`}
          </div>
          <div className="end">
            {TDminutes.length === 1 ? `0${TDminutes}` : TDminutes}
            :
            {TDseconds.length === 1 ? `0${TDseconds}` : TDseconds}
          </div>
        </div>
      </div>

      <div className="state" onClick={ stateHandler }>
        <div className="state-holder">
          <img src={playing ? PauseV : PlayV} alt="music-state" />
        </div>
      </div>

      <div className="tag">Designed and Developed by <span>Michael Gatmaitan</span> on January, 2021</div>

    </div>
  )
}

export default MusicTrack;