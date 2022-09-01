import React from "react";
import "./Searchbar.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Searchbar = () => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        value=""
        placeholder="Enter gym name here"
      ></input>
      <div id="icon">
        <FontAwesomeIcon id="ic" icon={faLocationDot} size="lg" />
      </div>
      <div id="clear">clear</div>
    </div>
  );
};
