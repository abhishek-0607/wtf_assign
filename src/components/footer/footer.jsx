import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="parent_container_footer">
        <div className="child1">
          <div className="child1_heading">
            <h1>WTF</h1>
          </div>
          <div className="child1_other">
            <div className="child1_other_box_footer">
              <div className="icons"></div>
              <div className="icons"></div>
              <div className="icons"></div>
            </div>
          </div>
        </div>
        <div className="child2">
          <div className="child2_boxes_footer">
            <h3>about</h3>
            <h3>FAQ</h3>
            <h3>Privacy Policy</h3>
            <h3>WTF in news</h3>
            <h3>term & conditions</h3>
            <h3>Refund cancellation</h3>
          </div>
          <div className="child2_boxes_footer">
            <h3>areanas</h3>
            <h3>studio</h3>
            <h3>studio</h3>
          </div>
          <div className="child2_boxes_footer">
            <h3>icon</h3>
            <h3>Text</h3>
            <h3>icon</h3>
            <h3>Text</h3>
          </div>
        </div>
      </div>
    </>
  );
};
