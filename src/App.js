import React, { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

// Import all image here and pass as props for performance
import {
  ArtistImage,
	artistName,
} from './source/post_malone/exporter';

// Components
import ArtistHeader from './components/artistHeader';
import MusicContainer from './components/musicContainer';
import BottomPlayer from './components/bottomPlayer';
import MusicTrack from './components/musicTrack';
import MenuSection from './components/menuSection';

// SVGs to Props
import { Play, Pause, PlayV, PauseV } from './svg/svgExporter';

function App() {

	// Percent = (n / wn) = P% * 100 = 100P%

	let player = useRef(null);
	let [activeIndex, setActiveIndex] = useState(null);

	let [currentMusic, setCurrentMusic] = useState(null);

	let [playing, setPlaying] = useState(false);

	let [seconds, setSeconds] = useState(0);
	let [duration, setDuration] = useState(0);

  let [showTrack, setShowTrack] = useState(false);

	let [showMenu, setShowMenu] = useState(false);

	let menuSection = useRef(null);

	// Duration Handler
	let durTemp = null;
	useEffect(() => {
	  let audPlayer = document.getElementById('player');
	  audPlayer.addEventListener('durationchange', () => {
	    setDuration(audPlayer.duration);
	  })
	}, [durTemp]);

	// Change State if user selected a music
	let [compiledMusicData, setCompiledMusicData] = useState({
		src: 'Not assigned',
		title: 'Not assigned',
		ft: 'Not assigned',
		album: 'Not assigned',
		albumTBS: 'Not assigned',
		albumTBL: 'Not assigned',
	});

	let updateCurrentMusic = (update) => {
		console.log(update);

		setCompiledMusicData(update);
		setCurrentMusic(update.src);
	}

	return (
		<React.Fragment>

			<ReactAudioPlayer
				src={currentMusic}
				autoPlay
				ref={ e => player = e }
				id="player"
				onCanPlayThrough={() => console.log('player can now fully played') }
				onLoadedMetadata={() => console.log("Metadata Downloaded") }
				onCanPlay={() => console.log("Is loaded")}
				listenInterval={500}
				onListen={() => setSeconds(player.audioEl.current.currentTime)}
				onPlay={() => setPlaying(true)}
				onPause={() => setPlaying(false)}
			/>

			<MenuSection
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				menuSection={menuSection}
			/>

			<ArtistHeader
				name={artistName}
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				ArtistImage={ArtistImage}
			/>
			
      <MusicContainer
        activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				updateCurrentMusic={updateCurrentMusic}
			/>

			<BottomPlayer
				compiledMusicData={compiledMusicData}
				playing={playing}
				seconds={seconds}
				duration={duration}
        showTrack={showTrack}
        setShowTrack={setShowTrack}

				Play={Play}
				Pause={Pause}
			/>

      <MusicTrack
				artistName={artistName}
        compiledMusicData={compiledMusicData}
        showTrack={showTrack}
        setShowTrack={setShowTrack}
        playing={playing}
        seconds={seconds}
        duration={duration}

				PlayV={PlayV}
				PauseV={PauseV}
      />

		</React.Fragment>
	);
}

export default App;
