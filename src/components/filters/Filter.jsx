import "./Filter.css";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Filter = () => {
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState([]);
  const [gym, setGym] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getByLocation();
  }, [status]);

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
    <div>
      <h2>Filters</h2>
      <button>Reset</button>
      <label>Location</label>
      <input type="text" placeholder="Enter the location" />
      <label>Price</label>
      <input type="text" placeholder="Min" />
      <input type="text" placeholder="Max" />
      <label>Cities</label>
      <select name="" id="" value={place} onChange={handleChange}>
        <option value="">Select city</option>
        <option value="new_delhi">New Delhi</option>
        <option value="ghaziabad"> Ghaziabad</option>
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
      </select>

      {status ? (
        <select name="" id="" onChange={handleChange}>
          {address.map((e, i) => (
            <option key={i} value={e.address1}>
              {e.address1}
            </option>
          ))}
        </select>
      ) : null}

      <button
        onClick={() => {
          getByLocation();
        }}
      >
        Nearby gym
      </button>
      <div>
        {gym.map((e, i) => (
          <div>
            {e.gym_name},{e.address1},{e.address2},{e.city},{e.pin}
          </div>
        ))}
      </div>
    </div>
  );
};
