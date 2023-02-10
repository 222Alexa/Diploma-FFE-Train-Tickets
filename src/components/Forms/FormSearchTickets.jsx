import React from "react";
import icon_geo from "../../img/icon_geo.svg";
import ic_arrow from "../../img/ic_arrow.svg";
import ic_calendar from "../../img/ic_calendar.svg";
const FormSearchTickets = () => {
    return (<React.Fragment>
                    <div className="form-row nopadding search-tickets__form">
              <div className="col col-md ml-4 p-0">
                <label
                  for="exampleInputFrom"
                  className="label__form-distantion"
                >
                  Направление
                </label>
                <div className="input-group distantion-group">
                  <input
                    type="text"
                    class="form-control from__input"
                    id="exampleInputFrom"
                    aria-describedby="fromHelp"
                    placeholder="Откуда"
                  />
                  <div className="input-group-append m-0 ">
                    <button
                      class="btn  ml-1 mr-1 p-0 geo-btn"
                      type="button"
                    >
                      <img class="icon-geo" src={icon_geo} alt="geo icon" />
                    </button>
                  </div>
                </div>{" "}
                <label for="exampleInputDateTo" className="label__form-date">
                  Дата
                </label>
                <div className="input-group date-group date-from">
                  <input
                    type="text"
                    class="form-control from__input "
                    id="exampleInputDateFrom"
                    aria-describedby="DateToHelp"
                    placeholder="ДД/ММ/ГГ"
                  />
                  <div className="input-group-append m-0 ">
                    <button class="btn  p-0 date-btn" type="button">
                      <img
                        class="icon-date"
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
                  <img class="ic_arrow" src={ic_arrow} alt="arrow icon" />
                </button>
              </div>
              <div className="col col-md mr-4 p-0">
                <div className="input-group distantion-group travel-to">
                  <input
                    type="text"
                    class="form-control to__input"
                    id="exampleInputTo"
                    aria-describedby="toHelp"
                    placeholder="Куда"
                  />
                  <div className="input-group-append m-0 ">
                    <button class="btn  p-0 geo-btn" type="button">
                      <img class="icon-geo" src={icon_geo} alt="geo icon" />
                    </button>
                  </div>
                </div>{" "}
                <div className="input-group date-group date-to">
                  <input
                    type="text"
                    class="form-control date-to__input"
                    id="exampleInputDateTo"
                    aria-describedby="DateToHelp"
                    placeholder="ДД/ММ/ГГ"
                  />
                  <div className="input-group-append m-0 ">
                    <button class="btn  p-0 date-btn" type="button">
                      <img
                        class="icon-date"
                        src={ic_calendar}
                        alt="calendar icon"
                      />
                    </button>
                  </div>
                </div>{" "}
                <button
                  type="button"
                  className="btn  p-0 search-tickets__button"
                >
                  Найти Билеты
                </button>
              </div>
            </div>
    </React.Fragment>)
}

export default FormSearchTickets;