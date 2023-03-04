import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//import OrderTripInfo from "../../SideBar/OrderTripInfo/OrderTripInfo";
import AddPassenger from "./AddPassengerBlock";

import BlockItem from "./BlockItem";
import { Button } from "../../Atoms/Atoms";
import "./passengersInfo.css";

const PassengersInfo = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState([1, 2]); //это здесь пока запросов нет

  const cardRef = useRef();
  let showInfo = true;

  const clickHandler = (event) => {
    cardRef.current = event.target.parentElement.nextSibling;
    cardRef.current.classList.toggle("active-show");
    cardRef.current.classList.contains("active-show")
      ? event.target.classList.add("expand-button")
      : event.target.classList.remove("expand-button");
  };

  /* Переписать для объекта и вынести в utils
  +эффект для корректного отображения порядка
  */
  const updateCounter = (arr, id) => {
    const newArr = arr.filter((o) => o !== id);
    return newArr.map((item, idx) => {
      const elem = idx + 1;
      return elem;
    });
  };

  const clickDelete = (id) => {
    const state = updateCounter(count, id);
    
    setCount(state);
  };
  /**  <span className="minus">{" \u2013"}</span> */
  return (
    <React.Fragment>
      <div className="passengers-info_block" ref={cardRef}>
        {count.length > 0
          ? count.map((item) => (
              <BlockItem
                key={item}
                id={item}
                clickHandler={clickHandler}
                clickDelete={clickDelete}
                showInfo={showInfo}
              />
            ))
          : null}
        <AddPassenger state={count} setState={setCount} />
        <div className="passengers-info_section_control">
          <Button
            text="Далее"
            type="next-block"
            onClick={() => navigate("personal_information")}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PassengersInfo;

//const options = ["Взрослый", "Детский"];

/**    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 280, height: 50, "& control": { height: 50 } }}
        renderInput={(params) => <TextField {...params} />}
      />{" "}
  <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
    </div>
  ); */
