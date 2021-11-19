import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, ...rest }) => (
  <button className="custom-button" {...rest}>
    {children}
  </button>
);
