import React from "react";
import { useState } from "react";

export const Filter = () => {
  const [place, setPlace] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setPlace(e.target.value);
  };

  return (
    <div>
      <label>Location</label>
      <input type="text" placeholder="Enter the location" />
      <label>Price</label>
      <input type="text" placeholder="Min" />
      <input type="text" placeholder="Max" />
      <label>Cities</label>
      <select name="" id="" value={place} onChange={handleChange}>
        <option value="">Select city</option>
        <option value="newdelhi">New Delhi</option>
        <option value="ghaziabad"> Ghaziabad</option>
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
      </select>
    </div>
  );
};
