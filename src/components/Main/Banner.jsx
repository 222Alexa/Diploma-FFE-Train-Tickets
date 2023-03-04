import React from "react";
import banner1 from "../../img/banner1.png";
import banner3 from "../../img/banner3.png";
import { Title } from "../Atoms/Atoms";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

const Banner = () => {
  const location = useLocation();
  const banner = location.pathname === "/diploma-ffe-train-tickets" ? banner1 : banner3;
  /**style={{height:location.pathname === "/"?"985px":"592px"}} */
  return (
    <React.Fragment>
      <div 
        className={location.pathname === "/diploma-ffe-train-tickets" ? "banner banner-home" : "banner"}
      >
      {location.pathname === "/diploma-ffe-train-tickets" ?  <Title
          key={nanoid()}
          text="Вся жизнь - "
          strongText={"путешествие!"}
          className="header-title"
        />:null}

        <img src={banner} className="img-banner" alt="train" />
      </div>
    </React.Fragment>
  );
};

export default Banner;

/**title добаить в баннер*/
