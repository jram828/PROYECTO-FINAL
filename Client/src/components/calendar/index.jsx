import './calendar.css';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import React from 'react';
import { getCitas } from '../../redux/actions';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';



function Calendario() {
  
  const localizer = dayjsLocalizer(dayjs)

  const dispatch = useDispatch();
  const citas = useSelector(state => state.citas)

  console.log( 'citas', citas)
 useEffect(() => {
  dispatch(getCitas());
}, [dispatch]);

const events = citas?.map(cita => {
  const startDateTime = dayjs(cita.fechaCita).set('hour', dayjs(cita.horaCita, 'HH:mm:ss').hour()).set('minute', dayjs(cita.horaCita, 'HH:mm:ss').minute()).toDate();
  const endDateTime = dayjs(startDateTime).add(30, 'minute').toDate(); // Asumimos que la duración es de 30 minutos

  return {
    start: startDateTime,
    end: endDateTime,
    title: cita.titulo
  };
});

console.log('events', events);

  

  /*const events = [
    {
      start:dayjs('2024-05-20T23:00:00').toDate(),
      end:dayjs('2024-05-20T23:30:00').toDate(),
      title:"reunion"
    }
  ]*/
  
  return (
    <div>
      <div style={{
        height: "550px",
        width: "550px",
      }}>
        <Calendar
        localizer={localizer}
        events={events}
        ></Calendar>
          
      </div>
    </div>
  )
}

export default Calendario