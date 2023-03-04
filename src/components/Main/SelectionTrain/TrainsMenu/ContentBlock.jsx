import React from "react";
import ContentBlockItem from "./BlockItem";
import { formattedPrice } from "../../../../utils/trainSelectionUtils";
import { nanoid } from "nanoid";

const ContentBlock = ({ className, data }) => {
  return (
    <React.Fragment>
      <div className={className + "_block"}>
        {data &&
          data.map((item) => {
            return (
              <ContentBlockItem key={nanoid()} className={className}>
                <GroupText
                  key={nanoid()}
                  className={className}
                  name={item.name}
                  amount={item.amount}
                />
                <GroupPrice
                  key={nanoid()}
                  className={className}
                  price={item.price}
                />
              </ContentBlockItem>
            );
          })}
      </div>
    </React.Fragment>
  );
};
export default ContentBlock;

/**группа название полки и их количество */
const GroupText = ({ className, name, amount }) => {
  console.log(className, name, amount, "group");
  return (
    <React.Fragment>
      <div className={className + "_group-text"}>
        <span className={className + "_name"}>{name}</span>
        <span className={className + " text-center"}>{amount}</span>
      </div>
    </React.Fragment>
  );
};

/**Группа цены "от ...Р" */
const GroupPrice = ({ className, price }) => {
  console.log(className, price);
  return (
    <React.Fragment>
      <div className={className + "_price"}>
        <span className={className + "_min-price"}>
          {formattedPrice(price)}
          <i
            className="fa fa-rub card-trains-menu-item-bottom-icon currency-icon "
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </React.Fragment>
  );
};
