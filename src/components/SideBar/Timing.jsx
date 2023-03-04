import React from "react";
import { Title } from "../Atoms/Atoms";
import RangeSlider from "./CustomSlider";


const Timing = ({ type }) => {
    return (
      <React.Fragment>
        <div className={type + "_timing-block"}>
          <div className="time-start__wrap">
            <Title text="Время отбытия" className={type + "_time-start-title"} />
            <RangeSlider min={0} max={24} height={10} />
          </div>
          <div className="time-end__wrap">
            <Title text="Время прибытия" className={type + "_time-end-title"} />
            <RangeSlider min={0} max={24} height={10}/>
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Timing;