import React from "react";
import "./Gyms.css";
import { Filter } from "./filters/Filter";
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/Navbar";
import { Searchbar } from "./searchbar/Searchbar";
import { Upper } from "./upper/upper";
export const Gyms = () => {
  return (
    <div className="Gyms">
      <Navbar />
      <img id="img" src="./posterGym.png" alt="" width="100%" />
      <Searchbar />
      <Filter />
      <Upper />
      <Footer />
    </div>
  );
};
