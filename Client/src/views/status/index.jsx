import { useEffect, useState } from "react";
import "./status.module.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {} from "mercado"


const ACCESSTOKEN = import.meta.env.VITE_ACCESS_TOKEN;

async function Status () {
  
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

      console.log("objeto queries: ", queries);
    }, []);

  
  const paymentInfo = await axios.get(
    `https://api.mercadopago.com/v1/payments/${queries.payment_id}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESSTOKEN}`,
      },
    }
  );

  console.log('Informacion del pago: ', paymentInfo)
  
return (
    <div className="status-container">
      <div>
        <p>Estado de la transacción:</p>
      </div>
      <div className="status-form">
        <div className="status-input-group">
          <label className="status-label">ID de pago:</label>
          <input value={queries.payment_id} className="status-input"></input>
          <label className="status-label">Estado:</label>
          <input value={queries.status} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Numero de referencia:</label>
          <input
            value={queries.external_reference}
            className="status-input"
          ></input>
          <label className="status-label">Tipo de pago:</label>
          <input value={queries.payment_type} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Número de orden :</label>
          <input
            value={queries.merchant_order_id}
            className="status-input"
          ></input>
          <label className="status-label">Preferencia:</label>
          <input value={queries.preference_id} className="status-input"></input>
        </div>
      </div>
      <Link to="/home/payments">
        <button className="button">Reintentar pago</button>
      </Link>
    </div>
  );
}

export default Status;
