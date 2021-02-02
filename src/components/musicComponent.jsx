import React from 'react';

let MusicComponent = props => {

  let {
    updateCurrentMusic,
    music,
    index,
    setActiveMusic,
    activeIndex,
    updateCompStates
  } = props;

  return (
    <div className="music-component"
      onClick={() => {
        let audio = document.getElementsByTagName("audio")[0];
        audio.load();
        updateCurrentMusic(music);
        setActiveMusic(index);
        updateCompStates(index);

        console.log(index, activeIndex);
      }}
    >
      <div className="music-album-thumbnail">
        <img src={music.albumTBS} alt="album" />
      </div>

      <div className="music-title">
        {music.title}
      </div>

      <div className="name-fade"></div>
    </div>
  )
}

export default MusicComponent;
