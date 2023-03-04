import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { createTheme } from "@mui/system";

import {
  PickersDay,
  pickersDayClasses,
  pickersDayProps,
} from "@mui/x-date-pickers";
import { makeStyles } from "@mui/styles";
//import { styled } from "@mui/material/styles";
import { ArrowLeft } from "@mui/icons-material";
import { ArrowRight } from "@mui/icons-material";
import ruLocale from "date-fns/locale/ru";
import clsx from "clsx";

import {
  getMonth,
  getDate,
  isSunday,
  differenceInCalendarDays,
} from "date-fns";
import { DatePicker } from "@mui/x-date-pickers";

/**Вот здесь у меня очень большие проблемы(
 * 1. Я не могу заставить Popper скрывать год в хедере, я не понимаю откуда он берет такой формат даты, крутила везде -
 * в адаптере, в локали, даже TextContent  не обошла, не получилось - окно создается динамически.
 * Нашла вариант переписать локаль самой с большой буквой и... год все равно ведь пролезет(((Помогите<!DOCTYPE html>
 *
 * 2. Мне не подружить в PickerDAy clsx и sxPopper. второй перекрывает классы первого. использовать что-одно не получается:
 * clsx знает какой понимает, что за день я ему передыю и подставляет класс,
 * sxPopper все равно какой день и класс, зато он понимает selected.
 * Как это связапть-то друг с другом?
 */
const materialTheme = createTheme({
  components: {
    // Name of the component

    //DatePicker: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        fontSize: "24px",
        fontFamily: ["Roboto", "sans-serif"].join(","),
      },
    },
  },
});

const useStyles = makeStyles(
  () => ({
    highlight: {
      borderRadius: 0,
      backgroundColor: "red",
      color: "blue",
      "&:hover, &:focus": {
        backgroundColor: "yellow",
      },
    },
    selectedDay: {
      color: "#000",
      background: "rgba(255, 168, 0, 0.31)",
      border: "2px solid #FFA800",
      borderRadius: "5px",
    },
    lastDay: {
      color: "red",
    },
    sunDay: {
      backgroundColor: "red",
    },
  }),
  { materialTheme }
);

/*const materialTheme = createTheme({
  overrides: {
    InputBase: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  },
});*/

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const today = new Date(); // just Date object of today

  const getDayElement = (day, selectedDate, isInCurrentMonth, dayComponent) => {
    const isSelected = getDate(day) === getDate(selectedDate[0]);
    const isToday =
      getDate(day) === getDate(today) && getMonth(day) === getMonth(today);
  };

  const popperSx = {
    "& .MuiPopperUnstyled-root": { inset: "0px auto auto 0px" },
    ".PrivatePickersFadeTransitionGroup-root:last-child": {
      display: "none",
    },
    "& .MuiPaper-root": {
      width: "352px",
      height: "302px",
      position: "absolute",
      top: "6px",
      left: "-147px",
      fontFamily: "Roboto",
      fontSize: "24px",
      color: "#000000",
    },
    "& .MuiPaper-root:before": {
      content: '""',
      border: "15px solid transparent",
      borderBottomColor: "#fff",
      position: "absolute",
      margin: "-30px 0px 0 152px",
    },
    "& .MuiDayPicker-header": {
      display: "none",
    },
    "& .MuiPickersCalendarHeader-labelContainer": {
      order: 2,
    },
    "& .MuiPickersCalendarHeader-label": {
      fontFamily: "Roboto",
      fontSize: "28px",
      color: "#000000",
    },
    "& .MuiPickersArrowSwitcher-root": {
      order: 1,
    },
    "& .MuiIconButton-edgeStart": {
      position: "absolute",
      right: "40px",
    },
    "& .MuiButtonBase-root": {
      fontFamily: "Roboto",
      fontSize: "24px",
      color: "#000000",
      background: "inherit",
      border: "none",
      margin: "3px",
    },
    "& .MuiPickersDay-dayOutsideMonth": {
      fontSize: "24px",
      color: "#e5e5e5",
    },
    "& .Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today": {
      border: "none",
      background: "rgba(255, 168, 0, 0.31)",
      border: "2px solid #FFA800",
      borderRadius: "5px",
    },
    "& .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root.Mui-selected, .css-yw9pje-MuiPopper-root-MuiPickersPopper-root .Mui-selected:hover":
      {
        fontSize: "24px",
        background: "rgba(255, 168, 0, 0.31)",
        border: "2px solid #FFA800",
        borderRadius: "5px",
      },
    "& .MuiCalendarPicker-viewTransitionContainer": {
      marginTop: "15px",
      borderTop: "2px solid #c4c4c4",
    },
    "& .makeStyles-sunDay-3": {
      fontWeight: 700,
    },
  };

  const classes = useStyles();

  const renderPickerDay = (date, selectedDates, pickersDayProps) => {
    ///console.log(date,pickersDayProps, 'date')

    const isSunDay = isSunday(new Date(date));
   
    //pickersDayProps.day мог бы помочь , но я не понимаю как поставить условие на ыч в зависимости от значения pickersDayProps.day
    return (
      <PickersDay
        {...pickersDayProps}
        // className={clsx({
        // [classes.sunDay]: isSunDay,//так стили оказываются в самом низу и перекрываются из Popper
        // они собираются динамически, те название класса заранее неизвестно
        //})}
        sx={{
          [`&&.${pickersDayClasses.selected}`]: {
            //ну вот селект работает и всё
            //то е сть я в sx могу ссылаться на класс, а в clsx на элемент

            color: "#000",
            background: "rgba(255, 168, 0, 0.31)",
            border: "2px solid #FFA800",
            borderRadius: "5px",
          },
        }}
      />
    );
  };

  return (
    <React.Fragment>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        // dateFormats={formats}
        adapterLocale={ruLocale}
      >
        <Stack spacing={3}>
          <DatePicker
            components={{
              LeftArrowIcon: ArrowLeft,
              RightArrowIcon: ArrowRight,
            }}
            type="date"
            views={["day"]}
            showDaysOutsideCurrentMonth={true}
            value={value}
            onChange={handleChange}
            InputProps={{
              sx: {
                width: "295px",
                height: "43px",
                background: "#fff",
              },
            }}
            PopperProps={{
              sx: popperSx,
            }}
            renderInput={(params) => {
              // console.log(params);
              params.inputProps.placeholder = "ДД/ММ/ГГГГ";

              return <TextField {...params} />;
            }}
            monthFormatter={() => {
              new Date();
            }}
            renderDay={renderPickerDay}

            //dayOfWeekFormatter={(day) => `${day}`} //это чтобы дни недели были "пн, вт...сб"
          />
        </Stack>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default Calendar;
/**Очищаемый реквизит больше не является опцией в Material-UI DatePicker. */

/**Popper отображает в другом месте в дереве DOM, чем ввод текстового поля компонента picker. Значения стиля должны быть переданы непосредственно в popper. */

/**https://github.com/netology-code/fe-2-diplom/blob/master/api/seats.md/*/
