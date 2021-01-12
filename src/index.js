import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MusicContextProvider from './MusicContext';


ReactDOM.render(
<MusicContextProvider>
  <App />
</MusicContextProvider>
, document.getElementById('root'));