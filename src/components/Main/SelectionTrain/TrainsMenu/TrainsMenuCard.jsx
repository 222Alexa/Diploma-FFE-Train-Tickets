import React from "react";
import AvailableVagons from "./AvailableVagons";
import { useNavigate, useParams } from "react-router-dom";
import CardIconsBlock from "./CardIconsBlock";
import { capitalizeFirstLetter } from "../../../../utils/trainSelectionUtils";
import { nanoid } from "nanoid";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

//console.log(format(new Date(1643372089), "hh:mm"));
const TrainsMenuCard = ({ departure, onClick }) => {
  const params=useParams();
  const navigate=useNavigate();
  params.id=departure.train._id;
//console.log(departure, 'departure.train._id')
    return (
      <React.Fragment>
        <div
          key={departure.train._id}
          className="card card-trains-menu-item"
        >
          <div key={nanoid()} className="card-top card-trains-menu-item-top">
            <div key={nanoid()} className="icon-train text-center">
              <i
                className="fa fa-subway fa-3x subway-icon"
                aria-hidden="true"
              ></i>
            </div>
            <h6 className="train-departure trains-number">###</h6>
            <div className="trail">
              <span key={nanoid()} className="trail-city-name">
                {capitalizeFirstLetter (departure.from.city.name)}
              </span>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              <span key={nanoid()} className="trail-city-name d-block">
                {capitalizeFirstLetter (departure.to.city.name)}
              </span>
              <div key={nanoid()} className="train-name">
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                <span>{departure.train.name}</span>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
  
          <div
            key={nanoid()}
            className="card-body p-0 card-trains-menu-item-body"
          >
            <div className="data-trains-group d-flex flex-row">
              <div className="train-departure-from d-flex flex-column">
                <span
                  key={nanoid()}
                  className="train-departure data-trains-datetime"
                >
                  {format(new Date(departure.from.datetime), "hh:mm")}
                </span>
                <span
                  key={nanoid()}
                  className="train-departure data-trains-city-name"
                >
                  {capitalizeFirstLetter (departure.from.city.name)}
                </span>
                <span className="train-departure data-trains-railway_station_name">
                  {departure.from.railway_station_name + " вокзал"}
                </span>
              </div>
              <div className=" d-flex flex-column trails-duration-block">
                <span className="trails-duration">
                  {format(new Date(departure.duration), "hh:mm")}
                </span>
                <i
                  className="fa fa-2x fa-long-arrow-right trais-arrow"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="train-departure-to d-flex flex-column">
                <span
                  key={nanoid()}
                  className="train-departure data-trains-datetime"
                >
                  {format(new Date(departure.to.datetime), "hh:mm")}
                </span>
                <span
                  key={nanoid()}
                  className="train-departure data-trains-city-name"
                >
                  {capitalizeFirstLetter (departure.to.city.name)}
                </span>
                <span className="train-departure data-trains-railway_station_name">
                  {departure.to.railway_station_name + " вокзал"}
                </span>
              </div>
            </div>
          </div>
  
          <div
            key={nanoid()}
            className="card-bottom p-0 card-trains-menu-item-bottom"
          >
            <div className="available-wagons-block">
              {departure.have_fourth_class && (
                <AvailableVagons
                
                  amount={departure.available_seats_info.fourth}
                  type="Сидячий"
                  min_price={departure.min_price}
                  className="fourth"
                />
              )}
              {departure.have_third_class && (
                <AvailableVagons
                
                  amount={departure.available_seats_info.third}
                  type="Плацкарт"
                  min_price={departure.price_info.third.top_price}
                  className="third"
                />
              )}
              {departure.have_second_class && (
                <AvailableVagons
                  key={nanoid()}
                  amount={departure.available_seats_info.second}
                  type="Купе"
                  min_price={departure.price_info.second.top_price}
                  className="second"
                />
              )}
              {departure.have_first_class && (
                <AvailableVagons
                  key={nanoid()}
                  amount={departure.available_seats_info.first}
                  type="Люкс(СВ)"
                  min_price={departure.price_info.first.top_price}
                  className="first"
                />
              )}
              <CardIconsBlock
                key={nanoid()}
                wifi={departure.have_wifi}
                express={departure.is_express}
              />
            </div>
            <button className="btn selection-seats" onClick={params.id?() => navigate(`${params.id}`):null}>Выбрать места</button>
          </div>
        </div>
      </React.Fragment>
    );
  };
  export default TrainsMenuCard;

  /*HOC приделать для AvailableVagons, он много места занимает */