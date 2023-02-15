import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "../Header/DatePicker";
import icon_geo from "../../img/icon_geo.svg";
import ic_arrow from "../../img/ic_arrow.svg";
import ic_calendar from "../../img/ic_calendar.svg";

const FormSearchTickets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname !== "/") {
    return;
  }

  return (
    <React.Fragment>
      <div className="form-row nopadding search-tickets__form">
        <div className="col col-md ml-4 p-0">
          <label htmlFor="exampleInputFrom" className="label__form-distantion">
            Направление
          </label>
          <div className="input-group distantion-group">
            <input
              type="text"
              className="form-control from__input"
              id="exampleInputFrom"
              aria-describedby="fromHelp"
              placeholder="Откуда"
            />
            <div className="input-group-append m-0 ">
              <button className="btn  ml-1 mr-1 p-0 geo-btn" type="button">
                <img className="icon-geo" src={icon_geo} alt="geo icon" />
              </button>
            </div>
          </div>{" "}
          <label htmlFor="exampleInputDateTo" className="label__form-date">
            Дата
          </label>
          <div className="input-group date-group date-from">
            <input
              type="text"
              className="form-control from__input "
              id="exampleInputDateFrom"
              aria-describedby="DateToHelp"
              placeholder="ДД/ММ/ГГ"
            />
            <div className="input-group-append m-0 ">
              <button className="btn  p-0 date-btn" type="button">
                <img
                  className="icon-date"
                  src={ic_calendar}
                  alt="calendar icon"
                />
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="col col-md-auto">
          <button
            type="button"
            className=" btn btn-transparent p-0 reverse-button"
          >
            <img className="ic_arrow" src={ic_arrow} alt="arrow icon" />
          </button>
        </div>
        <div className="col col-md mr-4 p-0">
          <div className="input-group distantion-group travel-to">
            <input
              type="text"
              className="form-control to__input"
              id="exampleInputTo"
              aria-describedby="toHelp"
              placeholder="Куда"
            />
            <div className="input-group-append m-0 ">
              <button className="btn  p-0 geo-btn" type="button">
                <img className="icon-geo" src={icon_geo} alt="geo icon" />
              </button>
            </div>
          </div>{" "}
          <div className="input-group date-group date-to">
            <input
              type="text"
              className="form-control date-to__input"
              id="exampleInputDateTo"
              aria-describedby="DateToHelp"
              placeholder="ДД/ММ/ГГ"
            />
            <div className="input-group-append m-0 ">
              <button className="btn  p-0 date-btn" type="button">
                <img
                  className="icon-date"
                  src={ic_calendar}
                  alt="calendar icon"
                />
              </button>
            </div>
          </div>{" "}
          <button
            type="button"
            className="btn  p-0 search-tickets__button"
            onClick={() => navigate("/trains")}
          >
            Найти Билеты
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormSearchTickets;
