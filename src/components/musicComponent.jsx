import React from 'react';

let MusicComponent = props => {

  let {
    updateCurrentMusic,
    music,
    index,
    setActiveMusic,
    updateCompStates,
    showTrack,
    setShowTrack,
  } = props;

  let trackOpenFunc = () => {
    setShowTrack(true);
    let bottomPlayer = document.getElementsByClassName("bottom-player")[0];
    let showTrackState = !showTrack;

    bottomPlayer.style.bottom = showTrackState ? "calc(100vh - 78px)" : "0";
    bottomPlayer.style.opacity = showTrackState ? 0: 1;
    document.body.style.overflow = showTrackState ? "hidden" : "auto";
  }

  return (
    <div className="music-component"
      onClick={ e => {
        let alreadyActive = e.target.parentElement.classList.value.includes("active");
        // check if active player component is clicked then open music track if true.
        console.log(alreadyActive);
        if (alreadyActive) {
          trackOpenFunc();
        } else {
          let audio = document.getElementsByTagName("audio")[0];
          audio.load();
          updateCurrentMusic(music);
          setActiveMusic(index);
          updateCompStates(index);
        }

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
