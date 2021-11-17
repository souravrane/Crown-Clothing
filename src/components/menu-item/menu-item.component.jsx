import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, subtitle }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
