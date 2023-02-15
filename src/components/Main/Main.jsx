import { nanoid } from "nanoid";
import React from "react";

import Banner from "./Banner";

const Main = (props) => {
  return (
    <main className="main container-fluid">
      <div className="row">
        <div className="col col-md p-0">
         
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Main;

