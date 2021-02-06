import React, { memo } from "react";

const VideoCard = memo((props) => {
  return (
    <div className="video">
      <img className="thumbnail" src="" alt="" />
      <span>{props.video.snippet.title}</span>
    </div>
  );
});

export default VideoCard;
