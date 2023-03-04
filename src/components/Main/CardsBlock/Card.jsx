import React from "react";

const Card = ({ className, children }) => {
  /**Card, this is card)) */

  return (
    <React.Fragment>
      <div className={className + "_card card"}>{children}</div>
    </React.Fragment>
  );
};

export default Card;
