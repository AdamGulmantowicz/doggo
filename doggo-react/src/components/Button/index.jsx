import React from "react";

export const Button = ({ children, styles = "", type = "", ...rest }) => {
  return (
    <button className={`btn ${styles}`} type={type} {...rest}>
      {children}
    </button>
  );
};
