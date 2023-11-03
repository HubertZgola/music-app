import {useState, useRef} from "react";
//Adding components
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from './util';
//Import Styles
import './styles/app.scss';

function App() {
  //Ref
  const audioRef = useRef(null);

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
});
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;      
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration})
  };

  return (
    <div className="App">
        <Song 
          currentSong={currentSong} 
        />
        <Player 
          audioRef={audioRef}
          currentSong = {currentSong}
          isPlaying = {isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong = {currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
        />
        <Library 
          audioRef={audioRef} 
          songs={songs} 
          setCurrentSong={setCurrentSong} 
          isPlaying={isPlaying}
          />
        <audio 
          onTimeUpdate={timeUpdateHandler} 
          ref={audioRef} 
          src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
      
          >
        </audio>
    </div>
  );
    
}

export default App;
