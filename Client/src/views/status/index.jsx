import { useEffect, useState } from "react";
import "./status.module.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// const ACCESSTOKEN = import.meta.env.VITE_ACCESS_TOKEN;

function Status () {
  
  const [queries, setQueries] = useState({});
  const { search } = useLocation();


  console.log('Search: ', search)

    useEffect(() => {
      const replaceFirst = search.replace("?", "");
      const splitString = replaceFirst.split("&");
      console.log("array queries: ", splitString);

      const formattedQueries = {};

      splitString.forEach((query) => {
        const [key, value] = query.split("=");
        Object.assign(formattedQueries, { [key]: value });
      });

      setQueries(formattedQueries);
      
    }, []);
    
  console.log("objeto queries: ", queries);
  console.log("Payment id: ", queries.payment_id);
  
  const obtenerPago = async (id) => {
    console.log("Payment id: ", id);
    try {
      const { data } = await axios.get(
        `https://api.mercadopago.com/v1/payments/${id}`,
        {
          headers: {
            'Authorization':
              "Bearer TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
          },
        }
      );
      console.log("Data obtener pago: ", data);
      return data
    } catch (error) {
      window.alert("No se obtuvieron los datos del pago");
    }
  }
    useEffect(() => {
      const datosPago = obtenerPago(queries.payment_id);
      console.log("Informacion del pago: ", datosPago);
    }, [queries.payment_id]);


  
return (
  <div className="status-container">
    <div>
      <p>Estado de la transacción:</p>
    </div>
    <div className="status-form">
      <div className="status-input-group">
        <label className="status-label">ID de pago:</label>
        <input value={datosPago.id} className="status-input"></input>
        <label className="status-label">Estado:</label>
        <input value={datosPago.status} className="status-input"></input>
      </div>
      <br />
      <br />
      <div className="status-input-group">
        <label className="status-label">Valor:</label>
        <input
          value={datosPago.transaction_amount}
          className="status-input"
        ></input>
        <label className="status-label">Tipo de pago:</label>
        <input
          value={datosPago.payment_type_id}
          className="status-input"
        ></input>
      </div>
      <br />
      <br />
      <div className="status-input-group">
        <label className="status-label">Número de orden :</label>
        <input value={datosPago.order.id} className="status-input"></input>
        <label className="status-label">Fecha:</label>
        <input value={queries.date_approved} className="status-input"></input>
      </div>
    </div>
    <Link to="/home/payments">
      <button className="button">Reintentar pago</button>
    </Link>
    <Link to="/home">
      <button className="button">Volver</button>
    </Link>
  </div>
);
}

export default Status;
