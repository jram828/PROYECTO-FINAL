import './calendar.css';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { getCitas } from '../../redux/actions';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect, useState } from 'react';

dayjs.locale("es");
dayjs.extend(utc);
dayjs.extend(timezone);




function Calendario() {
  const datos = JSON.parse(localStorage.getItem("loggedUser"));
  const messages = {
    allDay: "Todo el dia",
    previous: "Anterior",    
    next: "Siguiente",
    today:"Hoy",   
    month: "Mes",
    week: "Semana",
    day: "Dia",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
  };

  const localizer = dayjsLocalizer(dayjs);
  const dispatch = useDispatch();
  const citas = useSelector(state => state.citas);
  const [citasId, setCitasId] = useState([]);

  useEffect(() => {
    dispatch(getCitas());
  }, [dispatch]);

  useEffect(() => {
    if (citas) {
      const filteredCitas = datos.administrador ? 
        citas.datosPagina : 
        citas.datosPagina?.filter(cita => 
          (cita.nombreCliente === datos.nombre && cita.apellidoCliente === datos.apellido) || 
          (cita.nombreabogado === datos.nombre && cita.apellidoAbogado === datos.apellido)
        );
      setCitasId(filteredCitas);
    }
  }, [citas, datos]);
  const events = citasId?.map(cita => {
    const fechaCita = dayjs.tz(cita.fechaCita, 'America/Argentina/Buenos_Aires');
    const horaCita = dayjs(cita.horaCita, 'HH:mm:ss');

    const startDateTime = fechaCita
      .set('hour', horaCita.hour())
      .set('minute', horaCita.minute())
      .set('second', 0)
      .set('millisecond', 0)
      .toDate();

    const endDateTime = dayjs(startDateTime).add(30, 'minute').toDate();

    return {
      start: startDateTime,
      end: endDateTime,
      title: cita.titulo
    };
  });

  console.log('events', events);

  
  
  return (
    <div>
      <div style={{
        height: "500px",
        width: "500px",
      }}>
        <Calendar
        localizer={localizer}
        events={events}
        messages={messages}
        
        ></Calendar>
          
      </div>
    </div>
  )
}

export default Calendario