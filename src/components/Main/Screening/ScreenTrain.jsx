import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../CardsBlock/Card";
import { CardTop, CardBody, CardBottom } from "../CardsBlock/CardsMolecules";
import { Title, Button, MySvgIcon } from "../../Atoms/Atoms";
import TrainInfo from "../../Molecules/SelectionWagon/TrainInfo";
import AvailableVagons from "../SelectionTrain/TrainsMenu/AvailableVagons";
import TrailsData from "../../Molecules/SelectionTrain/TrailsData";
import icon_train from "../../../img/selectionTrain/icon_train.svg";
import icon_yellow_arrow_right from "../../../img/selectionTrain/icon_yellow-arrow-right.svg";
import CardIconsBlock from "../SelectionTrain/TrainsMenu/CardIconsBlock";

import { nanoid } from "nanoid";

const ScreenTrain = ({ data, dataVagons }) => {
  const navigate = useNavigate();

  if (!data) {
    return;
  }

  return (
    <React.Fragment>
      <div className="screening-block screening-block_train">
        <div className=" card screening-block_card">
          <div className="screening-block_card-top">
            <Title text={"Поезд"} className="screening-block_card_title" />
          </div>
          <div className="screening-block_card-body">
            <Card className="screening-train">
              <CardTop className="screening-train">
                <MySvgIcon
                  type={"screening-train"}
                  className={"screening-train"}
                  icon={icon_train}
                />
                <TrainInfo data={data} className="screening-train" />
              </CardTop>
              <CardBody className="screeneng-train">
                <TrailsData
                  data={data}
                  className="screening-train"
                  icon={icon_yellow_arrow_right}
                />
              </CardBody>
              <CardBottom className="screening-train">
                <div className="screening-available-vagons ">
                  {dataVagons.map((item) => (
                    <AvailableVagons
                      key={nanoid()}
                      amount={item.amount}
                      type={item.type}
                      min_price={item.min_price}
                      className="screening-train"
                    />
                  ))}
                </div>
                <CardIconsBlock
                  wifi={true}
                  express={true}
                  className={"screening-train_icons-block"}
                />
                <div className="screening-train_control">
                  <Button
                    text="Изменить"
                    type="screening"
                    onClick={() =>
                      navigate("/Diploma-FFE-Train-Tickets/trains")
                    }
                  ></Button>
                </div>
              </CardBottom>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreenTrain;

  /** Данные карточки поездки(номер поезда , время, города, вокзалы, вагоны)*/


