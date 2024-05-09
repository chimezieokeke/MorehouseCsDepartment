// VideoPlayer.js
import React from 'react';

function VideoPlayer() {
  return (
    <video controls width="500">
      <source src="/mov.mp4" type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
