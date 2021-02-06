import React, { memo } from "react";
import styles from "./videoCard.module.css";

const VideoCard = memo((props) => {
  return (
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={props.video.snippet.thumbnails.default.url}
        alt=""
      />
      <p className={styles.title}>{props.video.snippet.title}</p>
    </div>
  );
});

export default VideoCard;
