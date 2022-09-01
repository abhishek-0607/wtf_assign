import "./Filter.css";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Filter = () => {
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState([]);
  const [gym, setGym] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getByLocation();
  }, []);

  const handleChange = (e) => {
    setStatus(true);
    setPlace(e.target.value);
    getByAddress();
  };
  const getByAddress = () => {
    fetch(`https://devapi.wtfup.me/gym/places`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data[0].addressComponent);
        setAddress(res.data[0].addressComponent);
      });
  };
  const getByLocation = () => {
    fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=30&long=78`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        setGym(res.data);
      });
  };

  return (
    <div className="filter">
      <div id="search">
        <h2>Filters</h2>
        <button>Reset</button>
        <label>Location</label>
        <input type="text" className="input" placeholder="Enter the location" />
        <label>Price</label>
        <div className="minmax">
          <input type="text" className="max" placeholder="Min" />
          <input type="text" className="max" placeholder="Max" />
        </div>
        <label>Cities</label>

        <select name="" id="" value={place} onChange={handleChange}>
          <option value="">Select city</option>
          <option value="new_delhi">New Delhi</option>
          <option value="ghaziabad"> Ghaziabad</option>
          <option value="noida">Noida</option>
          <option value="delhi">Delhi</option>
        </select>

        {status ? (
          <>
            <label>Locations</label>
            <select name="" id="" onChange={handleChange}>
              {address.map((e, i) => (
                <option key={i} value={e.address1}>
                  {e.address1}
                </option>
              ))}
            </select>
          </>
        ) : null}
      </div>

      {/* <button
        onClick={() => {
          getByLocation();
        }}
      >
        Nearby gym
      </button> */}
      <div id="gymdata">
        {gym.map((e, i) => (
          <div className="item" key={i}>
            <div id="top">
              <h4>{e.gym_name}</h4>
              <Rating
                initialValue={e.rating}
                size={15}
                fillColor={`#ffffff`}
                emptyColor={`#4b4b4b`} /* Available Props */
              />
              <p>
                {/* {e.rating} */}
                <br />
                {e.address1}, {e.address2}, {e.city}, Pincode:- {e.pin}
                <br />
                {e.duration_text} away | {e.distance_text}
              </p>
            </div>
            <div id="bottom">
              <p>
                <FontAwesomeIcon icon={faIndianRupeeSign} /> 3000 for 3 Months
                <span>
                  <button>Book Now</button>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// WTF: Naresh Sir Gym,Sector 8,C Block,Noida,201301
