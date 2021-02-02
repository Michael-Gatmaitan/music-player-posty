import React, { useRef } from 'react';
import './scss/bottomPlayer.css';

let BottomPlayer = props => {
  let {
    compiledMusicData,
    playing,
    seconds,
    duration,
    showTrack,
    setShowTrack,
    Play,
    Pause
  } = props;

  let stateHandler = () => {
    let player = document.getElementsByTagName("audio")[0];
    playing ? player.pause() : player.play();
  }

  let trackOpenFunc = () => {
    setShowTrack(!showTrack);
    let showTrackState = !showTrack;

    bottomPlayer.current.style.bottom = showTrackState ? "calc(100vh - 78px)" : "0";
    bottomPlayer.current.style.opacity = showTrackState ? 0: 1;
    document.body.style.overflow = showTrackState ? "hidden" : "auto";
  }

  let { title, ft, albumTBS} = compiledMusicData;

  let bottomPlayer = useRef(null);

  return (
    <div className="bottom-player"
      style={{
        bottom: title === 'Not assigned' ? "-80px" : 0,
      }}
      ref={ bottomPlayer }
    >
      {/* Track Opener only, nothing else */}
      <div className="track-opener" onClick={ trackOpenFunc }>
        <div className="arm" />
      </div>

      <div className="song-duration-progress"
        style={{
          width: `${(seconds / duration) * 100}%`,
        }}
      />
      <div className="song-info">
        <div className="song-info-TBS-container">
          <img src={albumTBS} alt="album" />
        </div>

        <div className="info-container">
          <div className="song-title">
            {title}
          </div>

          <div className="song-featured">
            {ft === 'Unknown' ? 'Post Malone' : `ft ${ft}`}
          </div>
        </div>
      </div>

      <div className="state" onClick={ stateHandler }>
        <img src={playing ? Pause : Play} alt="music-state" />
      </div>

    </div>
  )
}

export default BottomPlayer;