import React from "react";
import {Button} from "../../Atoms/Atoms";
import Wagon from "./Wagon";
import {nanoid} from "nanoid"
const SeatsDetails = ({ className, data }) => {
    // const typeWagon = data.coach.class_type;
  
    if (!data) {
      return;
    }
    let availableWagon;
    if (data.coach.class_type === "first") availableWagon = ["02", "05"];
    else if (data.coach.class_type === "second") availableWagon = ["07", "09"];
    else if (data.coach.class_type === "third")
      availableWagon = [
        "10",
        "12",
        "15",
      ]; //откуда берутся номера свободных вагонов?
    else if (data.coach.class_type === "fourth")
      availableWagon = ["20", "21", "22", "25"];
  
    return (
      <React.Fragment>
        <div className={className + "_block"}>
          <div className={className + "_block-header"}>
            <div className={className + "_buttons-block"}>
              <span className={className + "_buttons-block-label"}>Вагоны</span>
              {availableWagon.map((item) => {
                return <Button key={nanoid()} type="number-wagons" text={item} />;
              })}
            </div>
            <span className={className + "_buttons-block-legend"}>
              Нумерация вагонов начинается с головы поезда
            </span>
          </div>
          <div className={className + "_block-body"}>
            <Wagon className={className} data={data} num={12} />
          </div>
        </div>
      </React.Fragment>
    );
  };

  export default SeatsDetails;