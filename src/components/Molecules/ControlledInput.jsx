import React from "react";

import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
const ControlledInput = ({ type, state, setState }) => {
  //console.log(type, "type");
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        id="outlined-controlled"
        type={type}
        className={classes.customStyle}
        placeholder={type === "date" ? "ДД/ММ/ГГГГ" : "_ _ _ _ _ _"}
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </React.Fragment>
  );
};

export default ControlledInput;
/*const maskPassport = { seria: "_ _ _ _", number: "_ _ _ _ _ _" }; //маска для поля ввода пока для все одинаковая.она исчезает полностью на фокусе или по мере заполнения?
const maskBirthCertificate = { number: "_ _ _ _ _ _ _ _ _ _ _ _" };
const maskDate = "ДД/ММ/ГГГГ";*/

const useStyles = makeStyles({
  customStyle: {
    "& .MuiOutlinedInput-root": {
      height: 50,
      paddingTop: 3,
      "& input": {
        height: 15,
      },
      "& fieldset": {
        height: 50,
      },

      "&.Mui-focused fieldset": {
        borderColor: "#ffa800",
        borderWidth: "2px",
      },
    },
  },
});
