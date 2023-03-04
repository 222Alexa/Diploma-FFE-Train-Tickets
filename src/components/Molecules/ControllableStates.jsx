import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ControllableStates = ({ type, state, setState, options }) => {
 

  const classes = useStyles();

  let width = type === "Свидетельство о рождении" ? 444 : 280;

  /*= value === "Паспорт РФ" ? 280 : 444;*/

  return (
    <React.Fragment>
      <Autocomplete
        defaultValue={state}
        className={classes.customStyle}
        onChange={(event, newValue) => {
          setState(newValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: width,

          "& control": { height: 50 },
        }}
        renderInput={(params) => <TextField {...params} />}
      />{" "}
    </React.Fragment>
  );
};

export default ControllableStates;

const useStyles = makeStyles({
  customStyle: {
    "& .MuiOutlinedInput-root": {
      height: 50,

      paddingBottom: 13,
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

/**"& .MuiAutocomplete-clearIndicator":{
  width:0,
  height:0,// не знаю как убрать индикатор
}, */
