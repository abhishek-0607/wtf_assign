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
            <p>
              Modern <br />
              Equipments
            </p>
          </div>
          <div className="child2_boxes">
            <p>
              Skilled <br />
              Trainer
            </p>
          </div>
          <div className="child2_boxes">
            <p>
              Top class <br />
              Ambiance
            </p>
          </div>
          <div className="child2_boxes">
            <p>
              Sanitized <br />
              GYMS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
