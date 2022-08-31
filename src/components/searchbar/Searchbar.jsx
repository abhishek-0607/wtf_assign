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
        name="EMAIL"
        placeholder="Enter your email address"
      ></input>
      <div className="icon">
        <FontAwesomeIcon id="" icon={faLocationDot} size="lg" />
      </div>
      <div className="clear">clear</div>
    </div>
  );
};
