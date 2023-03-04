import React from "react";
import { nanoid } from "nanoid";
import {
  format,
  getMonth,
  getYear,
  formatDistance,
  getDaysInMonth,
  getISODay,
  isWeekend,
  formatRelative,
  subDays,
  getDate,
  startOfWeek,
  differenceInCalendarDays,
} from "date-fns";
const Calendar = (props) => {
  console.log(props);

  const month = getMonth(new Date(props.date));
  console.log(month, "month");
  const year = getYear(new Date(props.date));
  const day = getDate(new Date(props.date));

  const curMonth = getDaysInMonth(new Date(year, month)); //количество дней в текущем месяце

  let prevMonth = getDaysInMonth(year, month - 2); //предыдущий месяц(количество дней)*/

  //console.log(getDaysInMonth(year, month));//количество дней в следующем месяце

  const startDayInMonth = getISODay(new Date(year, month, 1)); //индекс 1 числа текущего месяца

  const rows = 5;
  const cols = 7;

  const index = (startDayInMonth + rows) % cols; //сколько дней предшествует 1 числу текущего месяца
  //console.log(startDayInMonth, "startDayInMonth", index, "123");

  //const date = startOfWeek(new Date());//это начало недели(воскресенье)
  //console.log(date, "date")
  const filteredWeekends = (date) => {
    console.log(date);
    /**это для  воскресений */

    /**Fri Dec 15 2023 00:00:00 GMT+0300 (Москва, стандартное время) 'date' */
    //let arrLastWeekends = []

    return getISODay(date) === 7;
  };


  const filteredLastDays = (date) => {
    /* это прошедшие дни до даты(все, включая предыдущий месяц)*/
    const result = differenceInCalendarDays(date, new Date());
    if (result < 0) return true;
  };
  
  let tbody = [];
  let tr;
  let nextDay = 1;
  let count = 0 - index;
  //console.log(count, "count");

  for (let i = 0; i < rows; i++) {
    tr = [];
    for (let j = 0; j < cols; j++) {
      const strongClasses = filteredWeekends(new Date(year, month, count))
        ? " btn_strong-text"
        : "";
      if (count <= 0) {
        tr.push(
          <td key={nanoid()} className="ui-datepicker-other-month">
            <button className={"btn date-picker_btn" + strongClasses}>
              {count + prevMonth}
            </button>
          </td>
        );
      } else if (count === Number(day)) {
        tr.push(
          <td key={nanoid()} className="ui-datepicker-today">
            <button className={"btn date-picker_btn btn-today" + strongClasses}>
              {count}
            </button>
          </td>
        );
      } else if (count > 0 && count <= Number(day)) {
        //console.log(count, 'cur')
        tr.push(
          <td key={nanoid()}>
            <button
              className={
                "btn date-picker_btn btn-current-month_last-day" + strongClasses
              }
            >
              {count}
            </button>
          </td>
        );
      } else if (count > 0 && count <= curMonth) {
        console.log(count, "cur");
        tr.push(
          <td key={nanoid()}>
            <button
              className={
                "btn date-picker_btn btn-current-month" + strongClasses
              }
            >
              {count}
            </button>
          </td>
        );
      } else if (count > curMonth) {
        tr.push(
          <td key={nanoid()} className="ui-datepicker-other-month">
            <button className={"btn date-picker_btn" + strongClasses}>
              {nextDay++}
            </button>
          </td>
        );
      }

      count++;
    }
    tbody.push(<tr key={nanoid()}>{tr}</tr>);
  }

  return (
    <div className={props.className + " ui-datepicker"}>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day"></div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-month"></div>
          <div className="ui-datepicker-material-year"></div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {format(props.date, "MMMM")}
          </span>
          &nbsp;
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник"></th>
            <th scope="col" title="Вторник"></th>
            <th scope="col" title="Среда"></th>
            <th scope="col" title="Четверг"></th>
            <th scope="col" title="Пятница"></th>
            <th scope="col" title="Суббота"></th>
            <th scope="col" title="Воскресенье"></th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
};
export default Calendar;
