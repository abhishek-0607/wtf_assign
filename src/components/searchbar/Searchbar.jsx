import React from "react";
import "./Searchbar.css";

export const Searchbar = () => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        value=""
        name="EMAIL"
        placeholder="Enter your email address"
      ></input>
      <div className="icon">
        icon
        {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
      </div>
      <div className="clear">clear</div>
    </div>
  );
};
