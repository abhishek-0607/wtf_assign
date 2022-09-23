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
  }, [place]);

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
        console.log("location", res.data);
        setGym(res.data);
      });
  };

  return (
    <div className="filter">
      <div id="search">
        <h2>Filters</h2>
        {status && (
          <button
            onClick={() => {
              setStatus(false);

              getByLocation();
            }}
          >
            Reset
          </button>
        )}
        <label>Location</label>
        <input type="text" className="input" placeholder="Enter the location" />
        <label>Price</label>
        <div className="minmax">
          <input type="text" className="max" placeholder="Min" />
          <input type="text" className="max" placeholder="Max" />
        </div>
        <label>Cities</label>

        <select name="" id="city" value={place} onChange={handleChange}>
          <option value="">Select city</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Ghaziabad"> Ghaziabad</option>
          <option value="Greater Noida">Greater Noida</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
        </select>

        {status ? (
          <>
            <label>Locations</label>
            {/* <select name="" className="locations" onChange={handleChange}>
              {address.map((e, i) => (
                <option className="locations" key={i} value={e.address1}>
                  {e.address1}
                </option>
              ))}
            </select> */}
            <div className="locations">
              {address.map((e, i) => (
                <div
                  onClick={() => {
                    // setAddress(e.address1);
                    console.log(e.address1);
                    fetch(
                      `https://devapi.wtfup.me/gym/nearestgym?lat=30&long=78`
                    )
                      .then((res) => {
                        return res.json();
                      })
                      .then((res) => {
                        console.log("location", res.data);
                        setGym(
                          res.data.filter((ele) => ele.address1 === e.address1)
                        );
                      });
                  }}
                  className="address"
                  key={i}
                  value={e.address1}
                >
                  {e.address1}
                </div>
              ))}
            </div>
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
                allowHover={false}
                initialValue={e.rating}
                size={15}
                fillColor={`#ffffff`}
                emptyColor={`#4b4b4b`} /* Available Props */
              />
              <p>
                {e.address1}, {e.address2}, {e.city}
                <br />
                {e.duration_text} away | {e.distance_text}
              </p>
            </div>
            <div id="bottom">
              <p>
                <FontAwesomeIcon icon={faIndianRupeeSign} /> 3000 for 3 Months
              </p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// WTF: Naresh Sir Gym,Sector 8,C Block,Noida,201301
