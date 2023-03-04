import React, {useState} from "react";
import { Title, MySvgIcon, Button } from "../Atoms/Atoms";
import Timing from "./Timing";
import icon_arrow from "../../img/selectionTrain/icon_arrow.svg";
const SideBlock = ({ type }) => {
    const [showTiming, setShowTiming] = useState(false);
    const basedClasses =
      type === "departure" ? "sidebar-block-departure" : "sidebar-block-arrival";
  
    const clickHandler = () => {
      setShowTiming(!showTiming);
      console.log(showTiming, "showTiming");
    };
    return (
      <React.Fragment>
        <div className={"sidebar-side-block " + basedClasses}>
          <div className="sidebar-side-block_header">
            <MySvgIcon
              type="sidebar-side-block"
              icon={icon_arrow}
              className={basedClasses + "_arrow"}
            />
            <Title
              text={type === "departure" ? "Туда" : "Обратно"}
              className="sidebar-side-block_title"
            />
            <Button type="sidebar-side-block" onClick={clickHandler}>
              {showTiming ? (
                <i className="fa fa-minus" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-plus" aria-hidden="true"></i>
              )}
            </Button>
          </div>
          {showTiming ? <Timing type={type} /> : null}
        </div>
      </React.Fragment>
    );
  };

  export default SideBlock;