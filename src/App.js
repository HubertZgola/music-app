import {useState} from "react";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from './util';
//Import Styles
import './styles/app.scss';

function App() {
  
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="App">
        <Song 
          currentSong={currentSong} 
        />
        <Player 
          currentSong = {currentSong}
          isPlaying = {isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong = {currentSong}
        />
    </div>
  );
}

export default App;
