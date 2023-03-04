import React from "react";
import { Title } from "../Atoms/Atoms";
import RangeSlider from "./CustomSlider";

const PriceBlock = () => {
    return (
      <React.Fragment>
        <div className="sidebar-price-block">
          <Title text={"Стоимость"} className="sidebar-price-block__title" />
          <div className="sidebar-price-block_description">
            <span className="sidebar-price-block_text">от</span>
            <span className="sidebar-price-block_text">до</span>
          </div>
          <RangeSlider min={1920} max={4500} height={19}/>
        </div>
      </React.Fragment>
    );
  };
  
  export default PriceBlock;