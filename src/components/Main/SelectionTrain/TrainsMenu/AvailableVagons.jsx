import React, { useState } from "react";
import ContentBlock from "../../../Molecules/TicketsContentBlock/ContentBlock";
import { formattedPrice } from "../../../../utils/trainSelectionUtils";
const AvailableVagons = ({ amount, type, className, min_price }) => {
  //console.log(className, "availableVAgons");
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




/** <div className="available-wagons-block">
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
            <button className="btn selection-seats">Выбрать места</button> */

/*const AvailableSeats = ({ className, data, amount }) => {
  //ну и я не не нашла пока где брать количество верхних и нижних полок
  return (
    <React.Fragment>
      <div className="available-seats_block">
        <div className="available-seats_item">
          <div className="available-seats_group-text">
            <span className="available-seats_name">верхние</span>
            <span className={"amount-seats text-center"}>{amount}</span>
          </div>
          <div className="wagons-type_price">
            <span className={"wagons-type_min-price"}>
              {formattedPrice(data[0])}
              <i
                className="fa fa-rub card-trains-menu-item-bottom-icon currency-icon "
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
        <div className="available-seats_item">
          <div className="available-seats_group-text">
            <span className="available-seats_name">нижние</span>

            <span className={"amount-seats text-center"}>{amount}</span>
          </div>
          <div className="wagons-type_price">
            <span className={"wagons-type_min-price"}>
              {formattedPrice(data[1])}
              <i
                className="fa fa-rub card-trains-menu-item-bottom-icon currency-icon "
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
*/
/**поправить отступы для количества мест */
