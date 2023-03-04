import React from "react";
import { format, formatDuration } from "date-fns";
import { ru } from "date-fns/locale";


const TimingBlock = ({ className, duration }) => {
    const timeTextHours = formatDuration(
      { hours: Number(format(new Date(duration), "hh")) },
      { locale: ru },
  
      { format: ["hours"] }
    );
  
    const timeTextMinutes = formatDuration(
      { minutes: Number(format(new Date(duration), "mm")) },
      { locale: ru },
  
      { format: ["minutes"] }
    );
  
    return (
      <React.Fragment>
        <div className={className + "-timing"}>
          <span>{timeTextHours}</span>
          <span>{timeTextMinutes}</span>
        </div>
      </React.Fragment>
    );
  };

  export default TimingBlock;