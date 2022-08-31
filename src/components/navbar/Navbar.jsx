import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">WTF</h1>
        </div>
        {/* <div id="searchbar">
          <input id="movie" type="text" />
          <button oncdivck="searchMovie()">Search</button>
        </div> */}
        <div className="menu-container">
          <div className="menu-list">
            <div className="menu-list-item active">Fitness</div>
            <div className="menu-list-item">Nutrition</div>
            <div className="menu-list-item">Gyms</div>
            <div className="menu-list-item">Become WTF Partner</div>
            <div className="menu-list-item">About Us</div>
            <div className="menu-list-item last">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};
