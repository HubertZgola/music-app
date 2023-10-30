import {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause,} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    //Ref
    const audioRef = useRef(null);
    
    //Event Handler
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    
    const timeUpdateHandler = (e) => {
            const current = e.target.currentTime;
            const duration = e.target.duration;
            setSongInfo({...songInfo, currentTime: current, duration})
        };
        
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + String(Math.floor(time % 60))).slice(-2)
        );
    };
    
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    };
    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
        return(
            <div className="player">
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <input 
                        min={0} 
                        max={songInfo.duration} 
                        value={songInfo.currentTime} 
                        type="range" 
                        onChange={dragHandler}
                    />
                    <p>{getTime(songInfo.duration)}</p>                       
                </div>
                <div className="play-control">
                    <FontAwesomeIcon 
                        size="2x" 
                        className="skip-back" 
                        icon={faAngleLeft} 
                    />
                    <FontAwesomeIcon 
                        size="2x" 
                        onClick={playSongHandler} 
                        className="play" 
                        icon={isPlaying ? faPause : faPlay} 
                    />
                    <FontAwesomeIcon 
                        size="2x" 
                        className="skip-forward" 
                        icon={faAngleRight} 
                    />
                </div>
                <audio 
                    onTimeUpdate={timeUpdateHandler} 
                    ref={audioRef} 
                    src={currentSong.audio}
                    onLoadedMetadata={timeUpdateHandler}>
                </audio>
            </div>
    );
};

export default Player;