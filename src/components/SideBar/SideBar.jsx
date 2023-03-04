import React from "react";
import { useLocation } from "react-router-dom";

import { Title } from "../Atoms/Atoms";
import Calendar from "../DatePicker";
import PriceBlock from "./PriceBlock";

import SideBlock from "./SideBlock";
import SwitchBlock from "./SwitchBlock";
import LastTickets from "./LastTickets";


const SideBar = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return;
  }

  return (
    <React.Fragment>
      <aside className="sidebar-wrap container p-0">
        <div className="sidebar" id="sidebar">
          <FormSideBar/>
          <SwitchBlock />
          <PriceBlock />
          <SideBlock type="departure" />
          <SideBlock type="arrival" />
        </div>
        <LastTickets />
      </aside>
    </React.Fragment>
  );
};

export default SideBar;

const FormSideBar = () => {
  return (
    <React.Fragment>
      <div className="form-sidebar-block">
        <div className="form-sidebar-block_departure">
          <Title className={"form-sidebar-block_departure_title"} text="Дата поездки"/>

          <Calendar />
        </div>
        <div className="form-sidebar-block_arrival">
        <Title className={"form-sidebar-block_arrival_title"} text="Дата возвращения"/>
          <Calendar />
        </div>
      </div>
    </React.Fragment>
  );
};

