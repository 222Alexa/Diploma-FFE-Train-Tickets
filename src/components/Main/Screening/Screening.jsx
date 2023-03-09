import React from "react";
import { useNavigate } from "react-router-dom";
import { Title, Button, MySvgIcon } from "../../Atoms/Atoms";
import Card from "../CardsBlock/Card";
import { CardTop, CardBody, CardBottom } from "../CardsBlock/CardsMolecules";
import ScreenTrain from "./ScreenTrain";
import ScreenPassengers from "./ScreenPassengers";
import ScreenPayment from "./ScreenPayment";

import "./screening.css";

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
}; /**Это здесь ненадолго, пока я зачищу многоповторы */

const dataPassengers = [
  {
    type: "Взрослый",
    gender: "женский",
    fullname: {
      surName: "Мартынюк",
      secondName: "Эдуардовна",
      name: "Ирина",
    },
    document: { type: "Паспорт РФ", number: "4204 380694" },
    dateOfBirth: "17.02.1985",
  },
  {
    type: "Детский",
    gender: "мужской",
    fullname: {
      surName: "Мартынюк",
      secondName: "Сергеевич",
      name: "Кирилл",
    },
    document: { type: "Свидетельство о рождении", number: "VIII УН 256319" },
    dateOfBirth: "25.01.2006",
  },
  {
    type: "Взрослый",
    gender: "мужской",
    fullname: {
      surName: "Мартынюк",
      secondName: "Петрович",
      name: "Сергей",
    },
    document: { type: "Паспорт РФ", number: "4204 380694" },
    dateOfBirth: "19.06.1982",
  },
];

const availableVagons = [
  { amount: 88, type: "Сидячий", min_price: 1920 },
  { amount: 52, type: "Плацкарт", min_price: 2530 },
  { amount: 24, type: "Купе", min_price: 3820 },
  { amount: 15, type: "Люкс", min_price: 4950 },
];
/**CardTop топ проще взять с меню поездов. но она в процессе реинкарнации */
const Screening = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="screening-wrap">
        <ScreenTrain data={dataDetails} dataVagons={availableVagons} />
        <ScreenPassengers data={dataPassengers} />
        <ScreenPayment data={"Наличными"} />
        <div className="screening_block-control">
          <Button
            text="Подтвердить"
            type="next-block"
            onClick={() => navigate("/Diploma-FFE-Train-Tickets/order-result")}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Screening;
