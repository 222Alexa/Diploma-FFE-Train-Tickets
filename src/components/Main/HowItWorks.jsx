import "../Main/main.css";
import ic_subtract from "../../img/howItWorks/ic_subtract.svg";

import ic_house from "../../img/howItWorks/ic_house.svg";
import ic_globe from "../../img/howItWorks/ic_globe.svg";
import React from "react";

const HowItWorks = () => {
  return (
    <React.Fragment>
      <section className="how-it-works m-0" id="howItWorks">
        <div className="row no-gutters">
          <div className="col col-md-6 p-0">
            <h2 className="how-it-works__title">Как это работает</h2>
          </div>
          <div className="col col-md-6 p-0">
            <button className="btn btn-outline-light how-it-works__btn">
              Узнать больше
            </button>
          </div>
        </div>

        <div className="card-deck how-it-works-puncts">
          {" "}
          <div className="card how-it-works-puncts-item text-center m-0">
            <div className="card-top how-it-works__img">
              <img
                src={ic_subtract}
                className="how-it-works__icon"
                alt="icon subtract"
              />
            </div>
            <div className="card-body p-0">
              <h5 className="card-title how-it-works-puncts-item__title">
                Удобный заказ на сайте
              </h5>
            </div>
          </div>
          <div className="card how-it-works-puncts-item text-center m-0">
            <div className="card-top how-it-works__img">
              <img
                src={ic_house}
                className="how-it-works__icon"
                alt="icon subtract"
              />
            </div>
            <div className="card-body p-0">
              <h5 className="card-title how-it-works-puncts-item__title">
                Нет необходимости ехать в офис
              </h5>
            </div>
          </div> 
          <div className="card how-it-works-puncts-item text-center m-0">
            <div className="card-top how-it-works__img">
              <img
                src={ic_globe}
                className="how-it-works__icon"
                alt="icon subtract"
              />
            </div>
            <div className="card-body p-0">
              <h5 className="card-title how-it-works-puncts-item__title">
                Огромный выбор направлений
              </h5>
            </div>
          </div>
        </div>

        
      </section>
    </React.Fragment>
  );
};

export default HowItWorks;

/**  <img src="..." class="card-img-top" alt="..." /> */
