import React, { useState, useEffect } from "react";
import "./app.css";
import Nav from "./components/nav";
import MainList from "./components/mainList";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchingKeyWord, setSearchingKeyWord] = useState("");

  // 최초 목록 불러옴
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

  // 새로 검색
  // useEffect(() => {
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?q=${searchingKeyWord}&part=snippet&maxResults=3&key=AIzaSyDc3Z-GOTObkz8h3Rcyk4wtB9f-Lgp7_kU`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setVideos(result.items))
  //     .catch((error) => console.log("error", error));
  // }, [searchingKeyWord]);

  function searchingNewKeyword(keyword) {
    // setSearchingKeyWord(keyword);
    console.log("seaching ", keyword);
  }

  return (
    <div className="container">
      <Nav searching={searchingNewKeyword} />
      <span>{searchingNewKeyword}</span>
      <MainList videos={videos !== undefined ? videos : []} />
    </div>
  );
}

export default App;
