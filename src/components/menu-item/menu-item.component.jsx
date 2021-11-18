import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

export const MenuItem = withRouter(
  ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
      <div
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
);
