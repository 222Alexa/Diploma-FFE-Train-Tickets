import React from "react";
import ProgressBar from "./ProgressBar";
import SearchControls from "./SearchControls";
import TrainsMenu from "./TrainsMenu";

import { nanoid } from "nanoid";

const SelectionTrain = () => {
  return (
    <React.Fragment>
      <div className="selection-train__wrap">
        <ProgressBar key={nanoid()} />
        <SearchControls key={nanoid()} />
        <TrainsMenu key={nanoid()} />

      </div>
    </React.Fragment>
  );
};

export default SelectionTrain;
