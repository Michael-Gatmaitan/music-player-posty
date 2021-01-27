
// Music Artist
import ArtistImage from './image/post_malone.jpg';

// Thumbnails
import BeerbongsAndBentleys_Small from './image/album_thumbnail/beerbongs&bentleys_s.png';
import HollywoodsBleeding_Small from './image/album_thumbnail/hollywoodsbleeding_s.png';
import Stoney_Small from './image/album_thumbnail/stoney_s.png';

import BeerbongsAndBentleys_Large from './image/album_thumbnail/beerbongs&bentleys_l.png';
import HollywoodsBleeding_Large from './image/album_thumbnail/hollywoodsbleeding_l.png';
import Stoney_Large from './image/album_thumbnail/stoney_l.png';

import NoAlbum from './image/album_thumbnail/noalbum.png'

// Music
import PostMaloneMusic1 from './music/Post Malone - Better Now.mp3';
import PostMaloneMusic2 from './music/Post Malone - Candy Paint.mp3';
import PostMaloneMusic3 from './music/Post Malone - Circles.mp3';
import PostMaloneMusic4 from './music/Post Malone - Congratulations ft. Quavo.mp3';
import PostMaloneMusic5 from './music/Post Malone - Fiction ft. Logic.mp3';
import PostMaloneMusic6 from './music/Post Malone - Goodbyes ft. Young Thug.mp3';
import PostMaloneMusic7 from './music/Post Malone - I Fall Apart.m4a';
import PostMaloneMusic8 from './music/Post Malone - Psycho ft. Ty Dolla Ign.m4a';
import PostMaloneMusic9 from './music/Post Malone - rockstar ft. 21 Savage.mp3';
import PostMaloneMusic10 from './music/Post Malone - Take It Back ft. Juice WRLD.mp3';
import PostMaloneMusic11 from './music/Post Malone - White Iverson.mp3';
import PostMaloneMusic12 from './music/Post Malone, Swae Lee - Sunflower.mp3';

// SVG
import Play from './image/svg/play.svg';
import Pause from './image/svg/pause.svg';

import PlayV from './image/svg/play_v.svg';
import PauseV from './image/svg/pause_v.svg';

let AlbumThumbnails = {
  BeerbongsAndBentleys_Small,
  HollywoodsBleeding_Small,
  Stoney_Small,

  BeerbongsAndBentleys_Large,
  HollywoodsBleeding_Large,
  Stoney_Large,

  NoAlbum,
};

export {
  ArtistImage,
  AlbumThumbnails
};

let Musics = [
  {
    src: PostMaloneMusic1,
    title: `Better Now`,
    ft: `Unknown`,
    album: `Beerbongs & Bentleys`,
    albumTBS: BeerbongsAndBentleys_Small,
    albumTBL: BeerbongsAndBentleys_Large,
  }, {
    src: PostMaloneMusic2,
    title: `Candy Paint`,
    ft: `Unknown`,
    album: `Beerbongs & Bentleys`,
    albumTBS: BeerbongsAndBentleys_Small,
    albumTBL: BeerbongsAndBentleys_Large,
  }, {
    src: PostMaloneMusic3,
    title: `Circles`,
    ft: `Unknown`,
    album: `Hollywood's Bleeding`,
    albumTBS: HollywoodsBleeding_Small,
    albumTBL: HollywoodsBleeding_Large,
  }, {
    src: PostMaloneMusic4,
    title: `Congratulations`,
    ft: `Quavo`,
    album: `Stoney`,
    albumTBS: Stoney_Small,
    albumTBL: Stoney_Large,
  }, {
    src: PostMaloneMusic5,
    title: `Fiction`,
    ft: `Logic`,
    album: `Unknown`,
    albumTBS: NoAlbum,
    albumTBL: NoAlbum,
  }, {
    src: PostMaloneMusic6,
    title: `Goodbyes`,
    ft: `Young Thug`,
    album: `Hollywood's Bleeding`,
    albumTBS: HollywoodsBleeding_Small,
    albumTBL: HollywoodsBleeding_Large,
  }, {
    src: PostMaloneMusic7,
    title: `I Fall Apart`,
    ft: `Unknown`,
    album: `Stoney`,
    albumTBS: Stoney_Small,
    albumTBL: Stoney_Large,
  }, {
    src: PostMaloneMusic8,
    title: `Psycho`,
    ft: `Ty Dolla Ign`,
    album: `Beerbongs & Bentleys`,
    albumTBS: BeerbongsAndBentleys_Small,
    albumTBL: BeerbongsAndBentleys_Large,
  }, {
    src: PostMaloneMusic9,
    title: `rockstar`,
    ft: `21 Savage`,
    album: `Beerbongs & Bentleys`,
    albumTBS: BeerbongsAndBentleys_Small,
    albumTBL: BeerbongsAndBentleys_Large,
  }, {
    src: PostMaloneMusic10,
    title: `Take It Back`,
    ft: `Juice WRLD`,
    album: `Unknown`,
    albumTBS: NoAlbum,
    albumTBL: NoAlbum,
  }, {
    src: PostMaloneMusic11,
    title: `White Iverson`,
    ft: `Unknown`,
    album: `Stoney`,
    albumTBS: Stoney_Small,
    albumTBL: Stoney_Large,
  }, {
    src: PostMaloneMusic12,
    title: `Sunflower`,
    ft: `Unknown`,
    album: `Hollywood's Bleeding`,
    albumTBS: HollywoodsBleeding_Small,
    albumTBL: HollywoodsBleeding_Large,
  }, 
];

export { Musics };

export { Play, Pause, PlayV, PauseV };

// Albums:
//     Hollywoodsbleeding
//         - Circles
//         - Sunflower
//         - Goodbyes

//     Stoney
//         - White Iversion
//         - Congratulations
//         - I Fall Apart

//     Beerbongs & Bentleys
//         - Rockstar
//         - Better Now
//         - Psycho
//         - Candy Paint