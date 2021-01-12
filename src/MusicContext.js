import React, { Component, createContext } from 'react';

export const MusicContext = createContext();

class MusicContextProvider extends Component {
  state = {
    aileenLovesMe: false,
  }

  render() {
    return (
      <MusicContext.Provider value={{...this.state}}>
        {this.props.children}
      </MusicContext.Provider>
    )
  }
}

export default MusicContextProvider;