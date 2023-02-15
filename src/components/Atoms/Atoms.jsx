import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <React.Fragment>
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={onClick}>
          {text}
        </button>
      </div>
    </React.Fragment>
  );
};

export const Title = ({ text, strongText, className }) => {
  return (
    <React.Fragment>
      <h2 className="header-title">
        {text}
        <strong className="strong-text">{strongText}</strong>
      </h2>
    </React.Fragment>
  );
};
export const Border = ({className})=> {
  return <React.Fragment>
    <div className={className+"-border"}></div>
  </React.Fragment>
}
