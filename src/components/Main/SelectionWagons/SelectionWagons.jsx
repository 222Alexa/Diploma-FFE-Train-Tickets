import React, { useState } from "react";

import { Button, Title } from "../../Atoms/Atoms";
import TrailDetails from "./TrailDetails";
import QuantityTickets from "./QuantityTickets";
import WagonsTypesBlock from "./WagonsTypesBlock";
import SeatsDetails from "./SeatsDetails";
import { findWagon } from "../../../utils/trainSelectionUtils";
import useJsonFetch from "../../hooks/useJsonFetch";


import "./selectionWagons.css";

import { useNavigate } from "react-router-dom";

const dataDetails = {
  duration: 297180,
  from: {
    name: "москва",
    datetime: 1643457170,
    railway_station_name: "Ярославский",
  },
  to: {
    name: "санкт-петербург",
    datetime: 1643754350,
    railway_station_name: "Ладожский",
  },
};
const dataQuantity = [
  {
    type: "adult",
    text: "Взрослых",
    count: 2,
    deskription: "Можно добавить ещё 3 пассажиров",
  },
  {
    type: "child",
    text: "Детских",
    count: 1,
    deskription:
      "Можно добавить ещё 3 детей до 10 лет.Своё место в вагоне, как у взрослых, но дешевле в среднем на 50-65% ",
  },
  { type: "child-no-seats", text: 'Детских "без места"', count: 0, limit: 3 },
];

const SelectionWagons = () => {
  const navigate = useNavigate();
  const idFrom = "63329fb4591d1e0046805622";
  const { data } = useJsonFetch(`
    https://netology-trainbooking.netoservices.ru/routes/${idFrom}/seats
  `); //это тут исключительно для этапа верстки(надо же мне хоть какими-то данными карточки заполнить), потом переедет в epic
  //console.log(data, "seats");
  const [selectedType, setSelectedType] = useState(null);

  /*const clickHandler = (type) => {
    setSelectedType(type);
  };*/

  return (
    <React.Fragment>
      <div className="selection-wagon-content">
        <Title className={"selection-wagon_title"} text="Выбор мест" />
        <TrailDetails className="selection-wagon" data={dataDetails} />
        <QuantityTickets className="quantity-tickets" data={dataQuantity} />
        <WagonsTypesBlock
          className="wagons-type"
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        {selectedType ? (
          <SeatsDetails
            className="available-seats-details"
            data={findWagon(data, selectedType)}
          />
        ) : null}
        <div className="selection-wagon-content_control">
          <Button
            text="Далее"
            type="next-block"
            onClick={() => navigate("passengers")}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectionWagons;






