import React, { memo, useState, useEffect } from "react";
import "./nav.css";

const Nav = memo(({ searching }) => {
  const [searchWord, setSearchWord] = useState("");

  const onClick = () => {
    searching(searchWord);
  };

  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      console.log("Enter!");
    }
  };

  useEffect(() => {
    console.log(searchWord);
  }, [searchWord]);

  function handleChange(e) {
    setSearchWord(e.target.value);
  }

  return (
    <nav>
      <img className="Logo" src="./Logo.svg" alt="" />
      <input type="search" onChange={handleChange} onKeyDown={onKeyDown} />
      <button onClick={onClick}>Search</button>
    </nav>
  );
});

export default Nav;
