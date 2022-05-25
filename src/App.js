import React from "react";

import Title from './components/Title.js';
import AddSongContainer from './components/AddSongContainer.js';
import SongList from './components/SongList';


function App() {
  return (
    <section>
      <Title />
      <AddSongContainer />
      <SongList />
    </section>
  );
}

export default App;
