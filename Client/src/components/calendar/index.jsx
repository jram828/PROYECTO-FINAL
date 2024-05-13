import './calendar.css';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import React from 'react';

function Calendario() {
  
  const localizer = dayjsLocalizer(dayjs)
  
  return (
    <div>
      <div style={{
        height: "550px",
        width: "500px",
      }}>
        <Calendar
        localizer={localizer}
        ></Calendar>
          
      </div>
    </div>
  )
}

export default Calendario