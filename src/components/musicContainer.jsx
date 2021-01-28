import React, { useState, useEffect } from 'react';
import './scss/musicContainer.css';
import MusicComponent from './musicComponent';

import {
	Musics,
	Play,
	Pause
} from '../source/post_malone/exporter.js';

let setActiveMusic = (index) => {
	let musicComponents = [...document.getElementsByClassName("music-component")];

	for (let i = 0; i < musicComponents.length; i += 1) {
		if (i === index) {
			musicComponents[i].classList.add("active");
		} else {
			musicComponents[i].classList.value = "music-component";
		}
	}
}

let MusicContainer = props => {

	let {
    updateCurrentMusic,
    activeIndex,
    setActiveIndex
  } = props;

	let [musicCompStates, setMusicCompStates] = useState([]);

	// Couple of states for music components
  // Making copy of data, telling the state if its playing or not
	let temp = null;
	useEffect(() => {
		let copy = [];

		Musics.forEach(music => {
			copy.push({
				...music,
				playing: false
			});
		});

		setMusicCompStates(copy);
	}, [temp]);

  // Music Changer
	let updateCompStates = (index) => {
		let copy = musicCompStates;
    
    setActiveIndex(index);
		copy.forEach((music, i) => {
			if (i === activeIndex) {
				music.playing = true;
			} else {
				music.playing = false;
			}
		});

		setMusicCompStates(copy);
	}
  
	return (
		<div className="music-container">
			<div className="music-header">
				Songs ({musicCompStates.length})
			</div>
			<div className="music-comp-container">

				{musicCompStates.map((music, i) => (
					<MusicComponent
						// setCurrentMusic={setCurrentMusic}
						updateCurrentMusic={updateCurrentMusic}
						Play={Play}
						Pause={Pause}
						music={music}
						index={i}
            activeIndex={activeIndex}
						setActiveMusic={setActiveMusic}
						key={i}

						compData={music}
						updateCompStates={updateCompStates}
					/>
				))}

			</div>
		</div>
	)
}

export default MusicContainer;