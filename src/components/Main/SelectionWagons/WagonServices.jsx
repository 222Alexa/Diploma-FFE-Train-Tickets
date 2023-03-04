import React, { useState } from "react";
import WagonServicesButtons from "../../Molecules/SelectionWagon/WagonServicesButtons";

const WagonServices = ({ className, data }) => {
  /**группа кнопок для выбор допопций в вагонах */
  const [services, setServices] = useState([
    {
      name: "conditioning",
      included: data.coach.have_air_conditioning,
      selected: false,
    },
    {
      name: "wifi",
      included: data.coach.have_wifi,
      selected: false,
      price: data.coach.wifi_price,
    },
    {
      name: "linens",
      included: data.coach.is_linens_included,
      price: data.coach.linens_price,
      selected: false,
    },
  ]);
  /*const servicesData = {
      wifi: data.coach.have_wifi,
      conditioning: data.coach.have_air_conditioning,
      linens: data.coach.is_linens_included,
      linens_price: data.coach.linens_price,
      wifi_price: data.coach.wifi_price,
    };
  */

  /*const clickHandler = () => {};
    let currentFill = "#292929";
    //if(included)currentFill = "#292929";
    //if(included)currentFill = "#928F94";
    //if(clicked) currentFill="#F5F4F6;"
  */
  return (
    <React.Fragment>
      <div className={className + "_services-block"}>
        <div className={className + "_services-block_title"}>
          <span className={"services-block_title_normal"}>Обслуживание</span>
          <span className={"services-block_title_light"}>ФПК</span>
        </div>{" "}
        <WagonServicesButtons data={services} />
      </div>
    </React.Fragment>
  );
};
export default WagonServices;
