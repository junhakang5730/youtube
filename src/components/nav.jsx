import React, { memo } from "react";
import "./nav.css";

const Nav = memo(() => {
  return (
    <nav>
      <img className="Logo" src="./Logo.svg" alt="" />
      <input type="text" />
      <button>Search</button>
    </nav>
  );
});

export default Nav;
