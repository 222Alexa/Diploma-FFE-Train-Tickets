
import React from "react";
import {Title} from "../../Atoms/Atoms";

import { nanoid } from "nanoid";

const QuantityTickets = ({ className, data }) => {
    return (
      <React.Fragment>
        <div className={className + "_block"}>
          <Title 
            className={className + "_block-title"}
            text="Количество билетов"
          />
  
          <div  className={className + "_block-menu"}>
            {data.map((item) => {
              return (
                <div key={nanoid()} className={className + "_block-menu-item"}>
                  <div
                    className={
                      "input-group-prepend " + className + "_input-group"
                    }
                  >
                    <span className={className +" " +  item.type + "_input-group-text"}>
                      {item.text +" \u2013"} </span>
                    <input
                      type="text"
                      className={className +" " +  item.type + "input form-control"}
                      id="exampleInputTypeTickets"
                      aria-describedby="typeTickets"
                      defaultValue={item.count}
            
                    />
                  </div>{" "}
                  <label htmlFor={"exampleInputTypeTickets"} className={className +" " + item.type + "_input-label"}>{item.deskription}</label>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };

  export default QuantityTickets;