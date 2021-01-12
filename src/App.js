import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { MusicContext } from './MusicContext';

import Postie1 from '../src/music/post_malone/Post Malone - Better Now.mp3';
import Postie2 from '../src/music/post_malone/Post Malone - Candy Paint.mp3';
import Postie3 from '../src/music/post_malone/Post Malone - Circles.mp3';
import Postie4 from '../src/music/post_malone/Post Malone - Goodbyes.mp3';
import Postie5 from '../src/music/post_malone/Post Malone - I Fall Apart (Lofi Version).mp3';
import Postie6 from '../src/music/post_malone/Post Malone - I Fall Apart.m4a';
import Postie7 from '../src/music/post_malone/Post Malone - Psycho ft. Ty Dolla Ign.m4a';
import Postie8 from '../src/music/post_malone/Post Malone - Take It Back ft. Juice WRLD.mp3';
import Postie9 from '../src/music/post_malone/Post Malone, Swae Lee - Sunflower.mp3';

function App() {

  // Percent = (n / wn) = P% * 100 = 100P%

  let player = useRef(null);
  // let [music, setMusic] = useState(null);
  // let [vol, setVol] = useState(1);

  let [currentMusic, setCurrentMusic] = useState(null);
  let [currentMusicTitle, setCurrentMusicTitle] = useState(null);
  // let [isPlaying, setIsPlaying] = useState(false);

  let post_malone = {
    artist: {
      name: 'Post Malone',
      image: ''
    },
    musics: [
        {
          src: Postie1,
          title: 'Post Malone - Better Now'
        }, {
          src: Postie2,
          title: 'Post Malone - Candy Paint'
        }, {
          src: Postie3,
          title: 'Post Malone - Circles'
        }, {
          src: Postie4,
          title: 'Post Malone - Goodbyes'
        }, {
          src: Postie5,
          title: 'Post Malone - I Fall Apart (Lofi Version)'
        }, {
          src: Postie6,
          title: 'Post Malone - I Fall Apart'
        }, {
          src: Postie7,
          title: 'Post Malone - Psycho ft. Ty Dolla Ign'
        }, {
          src: Postie8,
          title: 'Post Malone - Take It Back ft. Juice WRLD'
        }, {
          src: Postie9,
          title: 'Post Malone, Swae Lee - Sunflower'
        }
      ]
  };

  let [seconds, setSeconds] = useState(0);
  let [duration, setDuration] = useState(0);

  // Duration Handler
  let durTemp = null;
  useEffect(() => {
    let audPlayer = document.getElementById('player');
    audPlayer.addEventListener('durationchange', () => {
      setDuration(audPlayer.duration);
    })

    window.addEventListener('dblclick', e => {
      // player.pause();
      // console.log(player.audioEl.current.pause);
      audPlayer.paused ? audPlayer.play() : audPlayer.pause();
      // for (let i in player.audioEl.current) {
      //   console.log(i);
      // }
    })
  }, [durTemp]);
  
  return (
    <React.Fragment>
      <ReactAudioPlayer
        src={currentMusic}
        autoPlay
        controls
        ref={ e => player = e }
        id="player"
        onCanPlayThrough={() => console.log('player can now fully played') }
        onLoadedMetadata={ () => console.log("Metadata Downloaded") }
        // onCanPlayThrough={() => console.log('Player is playing music right now.') }
        listenInterval={1000}
        onListen={() => setSeconds(player.audioEl.current.currentTime)}
        // onPlay={() => setIsPlaying(true)}
        // onPause={() => setIsPlaying(false)}
      />

      <div className="artist">Post Malone</div>

      <div className="music-grid">
        {post_malone.musics.map((music, i) => (
          <React.Fragment key={i + 1}>
          
            <div className="music-bar"
              onClick= {
                () => {
                  setCurrentMusic(music.src);
                  setCurrentMusicTitle(music.title);
                }
              }
            >
              {music.title}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="bottom-player"
        style={{
          bottom: currentMusicTitle === null ? '-56px' : '0'
        }}
      >

        <div className="duration-progress"
          style={{
            width: `${(seconds / duration) * 100}%`,
          }}
        />

        <div className="music-title">
          <div className="marquee-text">
            {currentMusicTitle === null ? '' : currentMusicTitle}
          </div>
        </div>

        <div className="music-control">
          <div className="music-title-wrapper" />
          <div className="music-state" />
        </div>

        {/* <div className="music-control"></div> */}
      </div>

    </React.Fragment>
  );
}

export default App;
