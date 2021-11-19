import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogleSignIn, ...rest }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...rest}
  >
    {children}
  </button>
);
