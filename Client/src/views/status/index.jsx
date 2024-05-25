import { useEffect, useState } from "react";
import "./status.module.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { verificarPago } from "../../handlers/verificarPago";

const ACCESSTOKEN = import.meta.env.VITE_ACCESS_TOKEN;

function Status () {
  
  const [queries, setQueries] = useState({});
  const [datosPago, setDatosPago] = useState({});
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
    
    const paymentData = await verificarPago(id);
      console.log("Respuesta verificacion pago: ", paymentData);
      setDatosPago(paymentData);
      return paymentData
    } catch (error) {
      window.alert("No se obtuvieron los datos del pago");
    }
  }




  if (queries.payment_id) {
    useEffect( () => {
      const datos = obtenerPago(queries.payment_id);
      console.log("Informacion del pago: ", datos);
      setDatosPago(datos);
    }, [queries.payment_id]);
  }




  
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
          <label className="status-label">Método de pago:</label>
          <input value={datosPago.payment_type_id} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Fecha:</label>
          <input
            value={datosPago.date_approved}
            className="status-input"
          ></input>
          <label className="status-label">Descripción::</label>
          <input value={datosPago.description} className="status-input"></input>
        </div>
      </div>
      <Link to="/home/payments">
        <button className="button">Reintentar pago</button>
      </Link>
    </div>
  );
}

export default Status;
