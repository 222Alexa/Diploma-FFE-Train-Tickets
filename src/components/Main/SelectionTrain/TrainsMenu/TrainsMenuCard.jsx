import React from "react";
import AvailableVagons from "./AvailableVagons";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../CardsBlock/Card";
import { CardTop, CardBody, CardBottom } from "../../CardsBlock/CardsMolecules";
import CardIconsBlock from "./CardIconsBlock";
import { Button, MySvgIcon } from "../../../Atoms/Atoms";
import TrainInfo from "../../../Molecules/SelectionWagon/TrainInfo";
import TrailsData from "../../../Molecules/SelectionTrain/TrailsData";

import icon_train from "../../../../img/selectionTrain/icon_train.svg";
import icon_yellow_arrow_right from "../../../../img/selectionTrain/icon_yellow-arrow-right.svg";

import { nanoid } from "nanoid";

const TrainsMenuCard = ({ departure, onClick }) => {
  const params = useParams();
  const navigate = useNavigate();
  params.id = departure.train._id;
  console.log(departure, "departure");
  const dataTrain = {
    duration: departure.duration,
    statusWagons: [
      { name: "fourth", status: departure.have_fourth_class },
      { name: "third", status: departure.have_third_class },
      { name: "second", status: departure.have_second_class },
      { name: "first", status: departure.have_first_class },
    ],
    from: {
      trainName: departure.train.name,
      name: departure.from.city.name,
      datetime: departure.from.datetime,
      railway_station_name: departure.from.railway_station_name,
    },
    to: {
      name: departure.to.city.name,
      datetime: departure.to.datetime,
      railway_station_name: departure.to.railway_station_name,
    },
    train: departure.train,
    available_seats_info: departure.available_seats_info,
    price_info: departure.price_info,
  };

  const filteredWagons = dataTrain.statusWagons.filter(
    (item) => item.status === true
  );

  const dataWagons = filteredWagons.map((item) => {
    if (item.name === "fourth") {
      item.amount = departure.available_seats_info.fourth;
      item.min_price = departure.price_info.fourth.bottom_price;
      item.type = "Сидячий";
    }
    if (item.name === "third") {
      item.amount = departure.available_seats_info.third;
      item.min_price = departure.price_info.third.bottom_price;
      item.type = "Плацкарт";
    }
    if (item.name === "second") {
      item.amount = departure.available_seats_info.second;
      item.min_price = departure.price_info.second.bottom_price;
      item.type = "Купе";
    }
    if (item.name === "first") {
      item.amount = departure.available_seats_info.first;
      item.min_price = departure.price_info.first.bottom_price;
      item.type = "Люкс";
    }
    console.log(item, "item99");
    return item;
  });

  return (
    <React.Fragment>
      <Card key={departure.train._id} className="trains-menu-item">
        <CardTop className="trains-menu-item">
          <MySvgIcon
            type={"trains-menu"}
            className={"trains-menu"}
            icon={icon_train}
          />
          <TrainInfo data={dataTrain} className="trains-menu" />
        </CardTop>
        <CardBody className="trains-menu-item">
          <TrailsData
            data={dataTrain}
            className="trains-menu"
            icon={icon_yellow_arrow_right}
          />
        </CardBody>
        <CardBottom className="trains-menu">
          <div className="trains-menu-available-vagons ">
            {dataWagons.map((item) => (
              <AvailableVagons
                key={nanoid()}
                amount={item.amount}
                type={item.type}
                min_price={item.min_price}
                className="trains-menu_item"
              />
            ))}
          </div>
          <CardIconsBlock
            wifi={true}
            express={true}
            className={"trains-menu_icons-block"}
          />
          <div className="trains-menu_control">
            <Button
              text="Выбрать места"
              type="selection-seats"
              onClick={params.id ? () => navigate(`${params.id}`) : null}
            ></Button>
          </div>
        </CardBottom>
      </Card>
    </React.Fragment>
  );
};

export default TrainsMenuCard;

/*HOC приделать для AvailableVagons, он много места занимает */
