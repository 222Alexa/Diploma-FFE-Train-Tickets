import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import PaginationTrainsMenu  from "./PaginationTrainsMenu"
import { nanoid } from "nanoid";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
const date = new Date(1643372089);
console.log(format(new Date(1643372089), "hh:mm"));

const TrainsMenu = () => {
  const { data } = useJsonFetch(
    "https://netology-trainbooking.netoservices.ru/routes?from_city_id=63329d7b591d1e00467e8a30&to_city_id=63329d7b591d1e00467e8a31"
  ); //это тут исключительно для этапа верстки(надо же мне хоть какими-то данными карточки заполнить), потом переедет в epic

  console.log(data);
  return (
    <React.Fragment>
      <section className="trains-menu-wrap d-flex" id="trains-menu">
        <div className="card-deck trains-menu-group">
          {data &&
            data.items.map((item) => (
              <div
                key={item.departure.train._id}
                className="card card-trains-menu-item"
              >
                <div
                  key={nanoid()}
                  className="card-top card-trains-menu-item-top"
                >
                  <div key={nanoid()} className="icon-train text-center">
                    <i
                      className="fa fa-subway fa-3x subway-icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h6 className="train-departure trains-number">###</h6>
                  <div className="trail">
                    <span key={nanoid()} className="trail-city-name">
                      {item.departure.from.city.name}
                    </span>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    <span key={nanoid()} className="trail-city-name d-block">
                      {item.departure.to.city.name}
                    </span>
                    <div key={nanoid()} className="train-name">
                      <i
                        className="fa fa-angle-double-left"
                        aria-hidden="true"
                      ></i>
                      <span>{item.departure.train.name}</span>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
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
                        {format(
                          new Date(item.departure.from.datetime),
                          "hh:mm"
                        )}
                      </span>
                      <span
                        key={nanoid()}
                        className="train-departure data-trains-city-name"
                      >
                        {item.departure.from.city.name}
                      </span>
                      <span className="train-departure data-trains-railway_station_name">
                        {item.departure.from.railway_station_name + " вокзал"}
                      </span>
                    </div>
                    <div className=" d-flex flex-column trails-duration-block">
                      <span className="trails-duration">
                        {format(new Date(item.departure.duration), "hh:mm")}
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
                        {format(new Date(item.departure.to.datetime), "hh:mm")}
                      </span>
                      <span
                        key={nanoid()}
                        className="train-departure data-trains-city-name"
                      >
                        {item.departure.to.city.name}
                      </span>
                      <span className="train-departure data-trains-railway_station_name">
                        {item.departure.to.railway_station_name + " вокзал"}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  key={nanoid()}
                  className="card-bottom p-0 card-trains-menu-item-bottom"
                >
                  <div className="available-wagons-block">
                    {item.departure.have_fourth_class && (
                      <AvailableVagons
                        key={nanoid()}
                        amount={item.departure.available_seats_info.fourth}
                        type="Сидячий"
                        min_price={item.departure.min_price}
                        className="fourth"
                      />
                    )}
                    {item.departure.have_third_class && (
                      <AvailableVagons
                        key={nanoid()}
                        amount={item.departure.available_seats_info.third}
                        type="Плацкарт"
                        min_price={item.departure.price_info.third.top_price}
                        className="third"
                      />
                    )}
                    {item.departure.have_second_class && (
                      <AvailableVagons
                        key={nanoid()}
                        amount={item.departure.available_seats_info.second}
                        type="Купе"
                        min_price={item.departure.price_info.second.top_price}
                        className="second"
                      />
                    )}
                    {item.departure.have_first_class && (
                      <AvailableVagons
                        key={nanoid()}
                        amount={item.departure.available_seats_info.first}
                        type="Люкс(СВ)"
                        min_price={item.departure.price_info.first.top_price}
                        className="first"
                      />
                    )}
                    <CardIconsBlock
                      key={nanoid()}
                      wifi={item.departure.have_wifi}
                      express={item.departure.is_express}
                    />
                  </div>
                  <button className="btn selection-seats">Выбрать места</button>
                </div>
              </div>
            ))}
        </div>
       <PaginationTrainsMenu key={nanoid()}/>
      </section>
    </React.Fragment>
  );
};
export default TrainsMenu;

const AvailableVagons = ({ amount, type, className, min_price }) => {
  console.log(amount, type, className, min_price, "available_seats_info");
  return (
    <React.Fragment>
      <div
        className={
          "available-wagons_block-item d-flex wagons-" + className + "-class"
        }
      >
        <span className="wagons_fourth_class-name wagons_type">{type}</span>
        <span className={"wagons_" + className + "-class amount-seats"}>
          {amount}
        </span>
        <div className="wagons-type_price">
          <span className="text-min-price">от</span>
          <span className={"wagons-type_min-price"}>{min_price}</span>
          <i
            className="fa fa-rub card-trains-menu-item-bottom-icon currency-icon "
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </React.Fragment>
  );
};

const CardIconsBlock = ({ wifi, express }) => {
  /**на экспресс сделать условие */
  return (
    <React.Fragment>
      <div className="card-trains-menu-item__icons-block text-right mr-2">
        {wifi && (
          <i class="fa fa-wifi card-icon_wifi  ml-2" aria-hidden="true"></i>
        )}

        <img
          className="icon_rocket card-icon_rocket ml-2"
          src="https://cdn.onlinewebfonts.com/svg/download_535427.png"
          alt="icon rocket"
        />

        <i class="fa fa-coffee card-icon_coffee ml-2" aria-hidden="true"></i>
      </div>
    </React.Fragment>
  );
};


/**Вывод названия города с большой буквы */

/**Это вообще недопустимо раздутый блок. Надо будет его поделить на много маленьких 
 * tи если не запутаться в классах, то можно будет переиспользовать
 * Menu  -> List -> Card-> CardTop + CardBody + CArdBottom(AvailableVagons+CardIconsBlock)
*/
