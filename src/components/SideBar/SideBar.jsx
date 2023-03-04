import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//import Calendar from "./Calendar";
import { Title } from "../Atoms/Atoms";
import Calendar from "../DatePicker";
import PriceBlock from "./PriceBlock";
import RangeSlider from "./CustomSlider";
import SideBlock from "./SideBlock";
import SwitchBlock from "./SwitchBlock";
import LastTickets from "./LastTickets";

import ic_calendar from "../../img/ic_calendar.svg";
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
const Form = () => {
  /**Календарь */

  const [showDepartureCalendar, setDepartureCalendar] = useState(false);
  const [showArrivalCalendar, setArrivalCalendar] = useState(false);
  console.log(showDepartureCalendar, showArrivalCalendar);
  return (
    <React.Fragment>
      <div className="form-row sidebar-form">
        <div className="col col-lg p-0">
          <div className="group-departure_wrap">
            <label
              htmlFor="sidebarInputDateFrom"
              className="label__form-sidebar-date"
            >
              Дата поездки
            </label>

            <div className="input-group sidebar-date-group sidebar-date-from">
              <input
                type="text"
                className="form-control sidebar-from__input "
                id="sidebarInputDateFrom"
                aria-describedby="DateToHelp"
                placeholder="ДД/ММ/ГГ"
              />
              <div className="input-group-append m-0 ">
                <button
                  className="btn  p-0 sidebar-form-date_btn"
                  type="button"
                  onClick={() => setDepartureCalendar(!showDepartureCalendar)}
                >
                  <img
                    className="icon-date"
                    src={ic_calendar}
                    alt="calendar icon"
                  />
                </button>
              </div>
            </div>
            {showDepartureCalendar ? (
              <Calendar
                className="sidebar_departure-calendar"
                date={new Date()}
              />
            ) : null}
          </div>
          <div className="group-arrival_wrap">
            <label
              htmlFor="sidebarInputDateTo"
              className="label__form-sidebar-date"
            >
              Дата возвращения
            </label>
            <div className="input-group sidebar-date-group sidebar-date-to">
              <input
                type="text"
                className="form-control to__input "
                id="sidebarInputDateTo"
                aria-describedby="DateToHelp"
                placeholder="ДД/ММ/ГГ"
              />

              <div className="input-group-append m-0 ">
                <button
                  className="btn  p-0 sidebar-form-date_btn"
                  type="button"
                  onClick={() => setArrivalCalendar(!showArrivalCalendar)}
                >
                  <img
                    className="icon-date"
                    src={ic_calendar}
                    alt="calendar icon"
                  />
                </button>
              </div>
            </div>
            {showArrivalCalendar ? (
              <Calendar
                className="sidebar_arrival-calendar"
                date={new Date()}
              />
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

/**.available-seats_block::before {
    content: "";
    border: 20px solid transparent;
    border-bottom-color: #e5e5e5;
    position: absolute;
    margin: -43px 0px 0 72px;
} */
