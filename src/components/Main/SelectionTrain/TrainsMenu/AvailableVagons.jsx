import React, { useState } from "react";
import ContentBlock from "../../../Molecules/TicketsContentBlock/ContentBlock";
import { formattedPrice } from "../../../../utils/trainSelectionUtils";
const AvailableVagons = ({ amount, type, className, min_price }) => {


  const data = [
    { name: "верхняя", amount: amount, price: min_price },
    { name: "нижняя", amount: amount, price: min_price },
  ];
  /** на свободные полки отдельный запрос, пока не разобралась куда*/

  const [availableSeats, setAvailableSeats] = useState(false);

  const mouseOverHandler = () => {
    setAvailableSeats(true);
  };

  const mouseOutHandler = () => {
    setAvailableSeats(false);
  };
  return (
    <React.Fragment>
      <div
        className={
          "available-wagons_block-item d-flex wagons-" + className + "-class"
        }
      >
        <div className="available-seats_group-text">
          <span className="wagons_fourth_class-name wagons_type">{type}</span>
          <span
            className={
              "wagons_" + className + "-class amount-seats text-center"
            }
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
          >
            {amount}
          </span>
        </div>
        <div className="wagons-type_price">
          <span className="text-min-price">от</span>
          <span className={"wagons-type_min-price"}>
            {formattedPrice(min_price)}
            <i
              className="fa fa-rub card-trains-menu-item-bottom-icon currency-icon "
              aria-hidden="true"
            ></i>
          </span>
        </div>
        {availableSeats ? (
          <ContentBlock className="available-seats" data={data} />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default AvailableVagons;

/**поправить отступы для количества мест */
