import React, { useState, useEffect } from "react";
import ControlledCheckbox from "../Molecules/ControlledCheckbox";
import ControllableStates from "../Molecules/ControllableStates";
import ControlledInput from "../Molecules/ControlledInput";

const FormPassengersInfo = () => {
  const [gender, setGender] = useState({ id: "male" });
  const [age, setAge] = useState("Взрослый");
  const [dateBirth, setDateBirth] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [surName, setSurName] = useState("");

  const clickHandler = (event) => {
    if (event.target.id === gender.id) {
      return;
    }
    setGender(() =>
      event.target.id === "male" ? { id: "male" } : { id: "female" }
    );
  };
  return (
    <React.Fragment>
      <div className="form passengers-data_form">
        <div className="passengers-data_type">
          <ControllableStates
            type="age"
            setState={setAge}
            options={["Взрослый", "Детский"]}
          />
        </div>

        <div className="passengers-data_fullname">
          <div className="form-group group-fullname">
            <label
              htmlFor="exampleFormControlInput1"
              className="passengers-data_fullname_label"
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
            >
              Имя
            </label>
            <ControlledInput type="text" state={name} setState={setName} />
          </div>
          <div className="form-group group-fullname">
            <label
              htmlFor="exampleFormControlInput3"
              className="passengers-data_fullname_label"
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
        <div className="passengers-data_gender_&_birthdate">
          <div className="form-group group-gender">
            <label
              htmlFor="exampleFormControlInput1"
              className="passengers-data_gender_label"
            >
              Пол
            </label>
            <div
              className="btn-group"
              role="group"
              aria-label="btn-group gender_&_birthdate"
            >
              <button
                id="male"
                type="button"
                className={
                  gender.id === "male"
                    ? "btn btn-gender gender-active"
                    : "btn btn-gender"
                }
                onClick={clickHandler}
              >
                M
              </button>

              <button
                id="female"
                type="button"
                className={
                  gender.id === "female"
                    ? "btn btn-gender gender-active"
                    : "btn btn-gender"
                }
                onClick={clickHandler}
              >
                Ж
              </button>
            </div>
          </div>
          <div className="form-group group-birthdate">
            <label
              htmlFor="exampleFormControlInput5"
              className="passengers-data_birthdate_label"
            >
              Дата рождения
            </label>
            <ControlledInput
              type="date"
              state={dateBirth}
              setState={setDateBirth}
            />
          </div>
        </div>
        <div className="passengers-data_disabled-person">
          <ControlledCheckbox />
          <span className="passengers-data_disabled-person_text">
            Ограниченная подвижность
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormPassengersInfo;
/** <input
              type="date"
              className="form-control input-birthdate"
              id="exampleFormControlInput6"
            /> */

/** <input
              type="text"
              className="form-control input-fullname"
              id="exampleFormControlInput1"
            />
            
            <input
              type="text"
              className="form-control input-fullname"
              id="exampleFormControlInput2"
            />
             <input
              type="text"
              className="form-control input-fullname"
              id="exampleFormControlInput4"
            /> */
