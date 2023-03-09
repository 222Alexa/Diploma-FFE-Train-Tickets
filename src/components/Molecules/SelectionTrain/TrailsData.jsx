import React from "react";
import { MySvgIcon } from "../../Atoms/Atoms";
import { capitalizeFirstLetter } from "../../../utils/trainSelectionUtils";
import { format } from "date-fns";
import { nanoid } from "nanoid";

const TrailsData = ({ className, data, icon, reverse = true }) => {
    console.log(data, 'trailsDAta')
  return (
    <React.Fragment>
      <div className={className + "-group d-flex flex-row"}>
        <div className={className + " train-departure-from d-flex flex-column"}>
          <span key={nanoid()} className="train-departure data-trains-datetime">
            {format(new Date(data.from.datetime), "hh:mm")}
          </span>
          <span
            key={nanoid()}
            className="train-departure data-trains-city-name"
          >
            {capitalizeFirstLetter(data.from.name)}
          </span>
          <span className="train-departure data-trains-railway_station_name">
            {data.from.railway_station_name + " вокзал"}
          </span>
        </div>
        <div className={className + " trails-duration-block"}>
          <span className="trails-duration">
            {format(new Date(data.duration), "hh:mm")}
          </span>
          <MySvgIcon type={className} className={className + "_top"} icon={icon} />
        </div>
        <div className={className + " train-departure-to d-flex flex-column"}>
          <span key={nanoid()} className="train-departure data-trains-datetime">
            {format(new Date(data.to.datetime), "hh:mm")}
          </span>
          <span
            key={nanoid()}
            className="train-departure data-trains-city-name"
          >
            {capitalizeFirstLetter(data.to.name)}
          </span>
          <span className="train-departure data-trains-railway_station_name">
            {data.to.railway_station_name + " вокзал"}
          </span>
        </div>
      </div>
      {reverse ? (
        <div className={className + "-reverse-group d-flex flex-row"}>
          <div
            className={className + " train-departure-from d-flex flex-column"}
          >
            <span
              key={nanoid()}
              className="train-departure data-trains-datetime"
            >
              {format(new Date(data.to.datetime), "hh:mm")}
            </span>
            <span
              key={nanoid()}
              className="train-departure data-trains-city-name"
            >
              {capitalizeFirstLetter(data.to.name)}
            </span>
            <span className="train-departure data-trains-railway_station_name">
              {data.to.railway_station_name + " вокзал"}
            </span>
          </div>
          <div className={className + " trails-duration-block"}>
            <span className="trails-duration">
              {format(new Date(data.duration), "hh:mm")}
            </span>
            <MySvgIcon
              type={className}
              className={className + "-reverse"}
              icon={icon}
            />
          </div>
          <div className={className + " train-departure-to d-flex flex-column"}>
            <span
              key={nanoid()}
              className="train-departure data-trains-datetime"
            >
              {format(new Date(data.from.datetime), "hh:mm")}
            </span>
            <span
              key={nanoid()}
              className="train-departure data-trains-city-name"
            >
              {capitalizeFirstLetter(data.from.name)}
            </span>
            <span className="train-departure data-trains-railway_station_name">
              {data.from.railway_station_name + " вокзал"}
            </span>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default TrailsData;
/**для реверса это временное состояние для верстки, пока  не будет нормальных запросов */
