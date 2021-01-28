import React, { useState } from 'react';

let MusicComponent = props => {

  let {
    updateCurrentMusic,
    Play,
    music,
    index,
    setActiveMusic,
    updateCompStates
  } = props;

  return (
    <div className="music-component">
      <div className="music-album-thumbnail">
        <img src={music.albumTBS} alt="album" />
      </div>

      <div className="music-title">
        {music.title}
      </div>

      <div className="music-state"
        onClick={() => {
          updateCurrentMusic(music);
          setActiveMusic(index);
          updateCompStates(index);
        }}

        // style={{
        //     opacity: compData.playing ? 0 : 1
        //   }}
      >
        <img src={Play} alt="state" />
      </div>
    </div>
  )
}

export default MusicComponent;
