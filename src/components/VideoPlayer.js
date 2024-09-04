import React from 'react';
import YouTube from 'react-youtube';
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const videoId = 'R8KRBSBLigU';

  const opts = {
    playerVars: {
      autoplay: 1, // Autoplay the video
    },
  };

  return (
    <div className="video-container">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
