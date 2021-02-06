import React, { memo, useState, useEffect } from "react";
import "./mainList.css";
import VideoCard from "./videoCard.jsx";

const MainList = memo((props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  );
});

export default MainList;
