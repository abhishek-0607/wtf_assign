import React from "react";
import "./upper.css";

export const Upper = () => {
  return (
    <>
      <div className="parent_container">
        <div className="child1">
          <div className="child1_heading">
            <h1>WTF Fitness Experience?</h1>
          </div>
          <div className="child1_other">
            <div className="child1_other_box"></div>
            <h3>@ your regular gym cost</h3>
          </div>
        </div>
        <div className="child2">
          <div className="child2_boxes">
            <h3>icon</h3>
            <h3>Text</h3>
          </div>
          <div className="child2_boxes">
            <h3>icon</h3>
            <h3>Text</h3>
          </div>
          <div className="child2_boxes">
            <h3>icon</h3>
            <h3>Text</h3>
          </div>
          <div className="child2_boxes">
            <h3>icon</h3>
            <h3>Text</h3>
          </div>
        </div>
      </div>
    </>
  );
};
