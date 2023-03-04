import React from "react";
import { useLocation } from "react-router-dom";
const ProgressBar = () => {
  if (useLocation().pathname === "/") {
    return;
  }
  /**Это вообще что должно быть - просто цветные плашки, меняющие цвет в зависимости от страницы
   * или они меняют цвет в зависимости от уровня заполнения?
   * или это "breadcrumps" и это кнопки, на которые можно нажимать и перемещаться вперед-назад
   */

  /** */
  return (
    <React.Fragment>
      <div className="progress">
        <div className=" progress-bar step-tickets p-0">
          <span className="border-top-step"></span>
          <span className="border-bottom-step"></span>

          <span className="numbering">1</span>
          <span className="progress-bar-name">Билеты</span>
        </div>
        <div className=" progress-bar  step-passenger p-0">
          <span className="border-top-step"></span>
          <span className="border-bottom-step"></span>

          <span className="numbering margin-numbering">2</span>
          <span className="progress-bar-name">Пассажиры</span>
        </div>
        <div className=" progress-bar step-pay p-0">
          <span className="border-top-step"></span>
          <span className="border-bottom-step"></span>
          <span className="numbering margin-numbering">3</span>
          <span className="progress-bar-name">Оплата</span>
        </div>
        <div className=" progress-bar step-validate p-0">
          <span className="numbering margin-numbering">4</span>
          <span className="progress-bar-name">Проверка</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
