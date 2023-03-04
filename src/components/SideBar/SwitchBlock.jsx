import React, { useState } from "react";



import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import icon_second_class from "../../img/selectionTrain/icon_second_class.svg";
import icon_fourth_class from "../../img/selectionTrain/icon_fourth_class.svg";
import icon_third_class from "../../img/selectionTrain/icon_third_class.svg";
import icon_rocket from "../../img/selectionTrain/icon_rocket.svg";
import icon_star from "../../img/selectionTrain/icon_star.svg";
import icon_wifi from "../../img/selectionTrain/icon_wifi.svg";

import CustomSwitch from "./CustomSwitch";
import { MySvgIcon } from "../Atoms/Atoms";
import "./sidebar.css";
/**const SvgIcon = styled(component, options)((props)=>(styles))*/ 

/**List-List-List!!! Это очень огромный блок! */

const SwitchBlock = () => {
    const [statusChecked, setStatusChecked] = useState([
      { first: false },
      { second: false },
      { third: false },
      { fourth: false },
      { wifi: false },
      { express: false },
    ]);
  
    const handleChange = (event) => {
      const inputName = event.target.name;
      const checked = event.target.checked;
      setStatusChecked((prev) => {
        return { ...prev, [inputName]: checked };
      });
      console.log(statusChecked);
    };
  
    return (
      <React.Fragment>
        <div className="sidebar-switch-block">
          <FormGroup>
            <div className="sidebar-switch-block-form-item">
              <MySvgIcon
                type={"sidebar-switchbox"}
                icon={icon_second_class}
                className="second-class"
              />
              <FormControlLabel
                control={<CustomSwitch />}
                labelPlacement="start"
                onChange={handleChange}
                name={"second"}
                label="Купе"
              />
            </div>
            <div className="sidebar-switch-block-form-item">
              <MySvgIcon
                type={"sidebar-switchbox"}
                icon={icon_third_class}
                className="third-class"
              />
              <FormControlLabel
                control={<CustomSwitch />}
                labelPlacement="start"
                onChange={handleChange}
                name={"third"}
                label="Плацкарт"
              />
            </div>
            <div className="sidebar-switch-block-form-item">
              <MySvgIcon
                type={"sidebar-switchbox"}
                icon={icon_fourth_class}
                className="fourth-class"
              />
              <FormControlLabel
                control={<CustomSwitch />}
                labelPlacement="start"
                onChange={handleChange}
                name={"fourth"}
                label="Сидячий"
              />
            </div>
            <div className="sidebar-switch-block-form-item">
              <MySvgIcon
                type={"sidebar-switchbox"}
                icon={icon_star}
                className="first-class"
              />
              <FormControlLabel
                control={<CustomSwitch />}
                labelPlacement="start"
                onChange={handleChange}
                name={"first"}
                label="Люкс"
              />
            </div>
            <div className="sidebar-switch-block-form-item">
              <MySvgIcon
                type={"sidebar-switchbox"}
                icon={icon_wifi}
                className="wifi"
              />
              <FormControlLabel
                control={<CustomSwitch />}
                labelPlacement="start"
                onChange={handleChange}
                name={"wifi"}
                label="Wi-Fi"
              />
            </div>
            <div className="sidebar-switch-block-form-item">
              <MySvgIcon
                type={"sidebar-switchbox"}
                icon={icon_rocket}
                className="express"
              />
              <FormControlLabel
                control={<CustomSwitch />}
                labelPlacement="start"
                onChange={handleChange}
                name={"express"}
                label="Экспресс"
              />
            </div>
          </FormGroup>
        </div>
      </React.Fragment>
    );
  };

  export default SwitchBlock;