import React, { useState } from "react";

const SearchControls = () => {
  const [value, setValue] = useState("времени");
  const amount = 20; //количество поездов, заглушка на сейчас

  const clickHandler = (event) => {
    event.preventDefault();
    setValue(event.target.textContent);
   
  };


  return (
    <React.Fragment>
      <div className="search-controls__wrap d-flex">
        <span className="amount-text">{"Найдено " + amount} </span>

        <div className="dropdown  dropend">
          <button
            className="btn  dropdown-toggle button-sorted-trains p-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            сортировать по:
          </button>
          <ul
            className="dropdown-menu dropdown-sorted-trains"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <button
                className="dropdown-item sorted-trains-item"
                onClick={clickHandler}
              >
                времени
              </button>
              <div className="divider-sorted-trains-item"></div>
            </li>
            <li>
              <button
                className="dropdown-item sorted-trains-item"
                onClick={clickHandler}
              >
                стоимости
              </button>
              <div className="divider-sorted-trains-item"></div>
            </li>
            <li>
              <button
                className="dropdown-item sorted-trains-item"
                onClick={clickHandler}
              >
                длительности
              </button>
            </li>
          </ul>
        </div>
        <span className="sorted-text">{value} </span>
        <div className="search-controls-puncts__wrap">
          <span className="puncts-list-text">показывать по: </span>
          <ul className=" search-controls-puncts-list d-flex">
            <li className="puncts-list-item">
              <button className="btn puncts-list__btn">5</button>
            </li>
            <li className="puncts-list-item">
              <button className="btn puncts-list__btn">10</button>
            </li>
            <li className="puncts-list-item">
              <button className="btn puncts-list__btn">20</button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchControls;
