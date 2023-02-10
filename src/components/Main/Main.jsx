import { nanoid } from "nanoid";
import React from "react";

import HomePage from "../Pages/HomePage";

const Main = () => {
  return (
    <main className="main container-fluid">
      <div className="row">
        <div className="col col-md p-0">
          <HomePage key={nanoid()} />
        </div>
      </div>
    </main>
  );
};

export default Main;

