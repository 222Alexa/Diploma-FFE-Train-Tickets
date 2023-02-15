import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {LocalizationProvider} from "@mui/x-date-pickers";

import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  console.log(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label=""
            inputFormat="ДД/ММ/ГГГГ"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </React.Fragment>
  );
};
export default Calendar;
