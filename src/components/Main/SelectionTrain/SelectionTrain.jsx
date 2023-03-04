import React from "react";

import SearchControls from "./SearchControls";
import TrainsMenu from "./TrainsMenu/TrainsMenu";

import "./selectionTrain.css";

import { nanoid } from "nanoid";


const SelectionTrain = () => {


  return (
    <React.Fragment>

        <div className="selection-train-content">
          <SearchControls key={nanoid()} />

          <TrainsMenu key={nanoid()} />
        </div>

    </React.Fragment>
  );
};

export default SelectionTrain;

