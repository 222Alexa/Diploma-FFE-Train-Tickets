import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "../Main/Banner";

import { Border } from "../Atoms/Atoms";
import FormSearchTickets from "../Forms/FormSearchTickets";
import Logo from "./Logo";


import "./header.css";
import { nanoid } from "nanoid";

const Header = () => {
  const location=useLocation();
  return (
    <React.Fragment>
      <header className="container-fluid header">
        <div className="row">
          <div className="col col-md">
          <Banner key={nanoid()}/>
            <div className="header-top">
              <Logo key={nanoid()} />
            </div>
            <NavBar key={nanoid()} />

{location.pathname==="/"?   <Border key={nanoid()} className={"header"} />:null}
           
          </div>
        </div>
        <div className="row">
          <div className="col col-md d-flex">


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
