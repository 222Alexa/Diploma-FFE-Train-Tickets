import React from "react";
import { useNavigate } from "react-router-dom";
import PersonalDataForm from "../../Forms/PersonalDataForm";
import ControlledCheckbox from "../../Molecules/ControlledCheckbox";
import { Title, Button } from "../../Atoms/Atoms";
import "./personalData.css";

import { optionsPayment } from "../../../utils/dataText";
const PersonalData = () => {
  
  const navigate = useNavigate();
  console.log(optionsPayment)
  return (
    <React.Fragment>
      <div className="personal-data_wrap">
        <div className="personal-data_block">
          <div className="personal-data_fullname">
            <div className="personal-data_block-top">
              <Title
                text={"Персональные данные"}
                className="personal-data_block_title"
              />
            </div>
            <PersonalDataForm />
          </div>

          <div className="personal-data_payment">
            <div
              className="personal-data_block-top"
              style={{
                borderTop: "1px dashed #928F94",
                borderBottom: "1px dashed #928F94",
              }}
            >
              <Title
                text={"Способ оплаты"}
                className="personal-data_block_title"
              />
            </div>
            <div className="online-payment">
              {" "}
              <div className="payment-wrap">
                <ControlledCheckbox />
                <span className="payment-description">Онлайн</span>
              </div>
              <div className="payment-options_block d-flex">
                {optionsPayment.map((item) => {
                  return (
                    <span key={item}className="payment-options_block-item">{item}</span>
                  );
                })}
              </div>
            </div>
            <div className="cash-payment" style={{ paddingTop: "58px" }}>
              {" "}
              <div className="payment-wrap">
                <ControlledCheckbox />
                <span className="payment-description">Наличными</span>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-data_block-control">
          <Button
            text="Купить билеты"
            type="next-block"
            onClick={() =>
              navigate("/Diploma-FFE-Train-Tickets/screening")
            }
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalData;

/**Условие. чтоб только один чекбокс был выделен */
