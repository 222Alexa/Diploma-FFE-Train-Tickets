import React from "react";
import { capitalizeFirstLetter } from "../../../utils/trainSelectionUtils";

const TrainInfo = ({ data }) => {
  return (
    <React.Fragment>
      <div className="trail">
        <span className="trains-number">106C</span>
        <span className="trail-city-name">
          {capitalizeFirstLetter(data.from.name)}
        </span>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        <span className="trail-city-name d-block">
          {capitalizeFirstLetter(data.to.name)}
        </span>
      </div>
    </React.Fragment>
  );
};

export default TrainInfo;
