import React from "react";
import ProgressBar from "./SelectionTrain/ProgressBar";
import SideBar from "../SideBar/SideBar";
import { useLocation } from "react-router-dom";
const Main = (props) => {
  const location = useLocation();

  const classBased =
    location.pathname === "/"
      ? "main-content__home-page"
      : "main-content__wrap d-flex";
  return (
    <main className="main container-fluid">
      <div className="row">
        <div className="col col-lg p-0">
          <ProgressBar />
          <div className={classBased}>
            {location.pathname !== "/" ? <SideBar /> : null}
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

/**SideBar здесь, тк он содержит контент, непосредственно относящийся к main.
 *  Не уверена, что это семантически правильно, тк по идее aside и main должны быть на одном уровне,
 * но в документации однозначных требований к положению на странице не нашла.
 * ну, либо как вариант его выносить все же на один уровень с main
 * и позиционировать абсолютно.
 * Но тогда в обоих блоках будет оч затруднительно что-то изменять.
 *    */
