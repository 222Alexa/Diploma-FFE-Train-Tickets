import React from "react";
import NavBar from "./NavBar";

import FormSearchTickets from "../Forms/FormSearchTickets";
import Logo from "./Logo";


import "./header.css";
import { nanoid } from "nanoid";

const Header = () => {
  return (
    <React.Fragment>
      <header className="container-fluid header">
        <div className="row">
          <div className="col col-md">
            <div className="header-top">
              <Logo key={nanoid()} />
            </div>
            <NavBar key={nanoid()} />
            <div className="header-border"></div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md d-flex">
            <h2 className="header-title">
              Вся жизнь - <strong className="strong-text">путешествие!</strong>
            </h2>

            <FormSearchTickets key={nanoid()} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;

/** 

         
        </div> */
