import React from "react";
const FormSubscribe = () => {
  return (
    <React.Fragment>
      <div className="form-row form-subscribe">
        <input
          type="text"
          className="form-control subscribe__input"
          id="exampleInputSubscribe"
          aria-describedby="fromSubscribe"
          placeholder="e-mail"
        />
        <button className="btn btn-transparent subscribe__btn">
          Отправить
        </button>
      </div>
    </React.Fragment>
  );
};

export default FormSubscribe;
