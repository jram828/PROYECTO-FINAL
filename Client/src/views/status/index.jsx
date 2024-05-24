import { useState } from "react";
import "./status.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Status() {
  console.log("Search params: ", useSearchParams());
  const [params] = useSearchParams();
  console.log('params: ', params)
  
  const [queries, setQueries] = useState({});
  const { search } = useLocation();
  console.log('Search: ', search)

  const replaceFirst = search.replace("?", "")
  const splitString = replaceFirst.split("&")
  console.log('array queries: ', splitString)
  
  splitString.forEach((query) => {
    const [key, value] = query.split('=')
    setQueries({
      ...queries,
      [key]: value,
    })
  });

  console.log('objeto queries: ',queries)
  // {
  //   "collection_id": "null",
  //   "collection_status": "null",
  //   "payment_id": "null",
  //   "status": "null",
  //   "external_reference": "null",
  //   "payment_type": "null",
  //   "merchant_order_id": "null",
  //   "preference_id": "1817941600-7b056a33-c4ef-4977-ad4c-ec52d1645415",
  //   "site_id": "MCO",
  //   "processing_mode": "aggregator",
  //   "merchant_account_id": "null"
  // }

  // const payment_id = params.get('payment_id')
  // const status = params.get("status");
  // const payment_type = params.get("payment_type");
  // const external_reference = params.get("external_reference");
  // const merchant_order_id = params.get("merchant_order_id");
  // const preference_id = params.get("preference_id");

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
            <input value={status} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Numero de referencia:</label>
          <input value={queries.external_reference} className="status-input"></input>
          <label className="status-label">Tipo de pago:</label>
          <input value={queries.payment_type} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Número de orden :</label>
          <input value={queries.merchant_order_id} className="status-input"></input>
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
