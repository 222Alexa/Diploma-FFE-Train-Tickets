import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ControlledCheckbox from "../Molecules/ControlledCheckbox";

import ControlledInput from "../Molecules/ControlledInput";

const PersonalDataForm = () => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [surName, setSurName] = useState("");
  return (
    <React.Fragment>
      <div className="form personal-data_form">
        <div className="passengers-data_fullname" style={{ margin: 0 }}>
          <div className="form-group group-fullname">
            <label
              htmlFor="exampleFormControlInput1"
              className="passengers-data_fullname_label"
              style={{ color: "#292929" }}
            >
              Фамилия
            </label>
            <ControlledInput
              type="text"
              state={surName}
              setState={setSurName}
            />
          </div>
          <div className="form-group group-fullname">
            <label
              htmlFor="exampleFormControlInput2"
              className="passengers-data_fullname_label"
              style={{ color: "#292929" }}
            >
              Имя
            </label>
            <ControlledInput type="text" state={name} setState={setName} />
          </div>
          <div className="form-group group-fullname">
            <label
              htmlFor="exampleFormControlInput3"
              className="passengers-data_fullname_label"
              style={{ color: "#292929" }}
            >
              Отчество
            </label>
            <ControlledInput
              type="text"
              state={secondName}
              setState={setSecondName}
            />
          </div>
        </div>
        <div className="group-contacns">
          <div className="form-group group-contacts">
            <label
              htmlFor="exampleFormControlInputPhone"
              className="passengers-data_fullname_label"
              style={{ color: "#292929" }}
            >
              Контактный телефон
            </label>
            <ControlledInput type="text" />
          </div>
          <div className="form-group group-contacts">
            <label
              htmlFor="exampleFormControlInputEmail"
              className="passengers-data_fullname_label"
              style={{ color: "#292929" }}
            >
              E-mail
            </label>
            <ControlledInput type="text" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalDataForm;
