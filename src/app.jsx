import React, { useState, useEffect } from "react";
import "./app.css";
import Nav from "./components/nav";
import MainList from "./components/mainList";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?q=oasis&part=snippet&maxResults=3&key=AIzaSyDc3Z-GOTObkz8h3Rcyk4wtB9f-Lgp7_kU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="container">
      <Nav />
      <MainList videos={videos} />
    </div>
  );
}

export default App;
