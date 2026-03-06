// MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';
function MusicPlayer({ autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // Path to your music file in the public folder
  const musicUrl = "/music/forfev.mp3";

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Auto-play if prop is true (when page unlocks)
    if (autoPlay) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Auto-play failed - user needs to click play");
          });
      }
    }

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [autoPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.log("Play failed:", error));
    }
  };

  const changeVolume = (e) => {
    const volume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <div className="music-player-inside-lyrics">
      <button onClick={togglePlay} className="music-play-btn">
        {isPlaying ? '⏸️' : '▶️'} {isPlaying ? 'Pause' : 'Play'} "mariye"
      </button>
      <div className="music-controls">
        <span>🔊</span>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          defaultValue="0.5"
          onChange={changeVolume}
          className="music-volume"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;