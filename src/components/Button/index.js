// react
import React from "react";

// styles
import "./button.styles.scss";

const BUTTON_TYPE_ClASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({children, buttonType, ...otherProps}) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_ClASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
