import React from "react";

function Heading({ children, size, styles = "" }) {
  if (size === "small") {
    return <h3 className={`h3 ${styles}`}>{children}</h3>;
  }
  if (size === "big") {
    return <h1 className={`h1 ${styles}`}>{children}</h1>;
  }

  return <h2 className={`h2 ${styles}`}>{children}</h2>;
}

export default Heading;
