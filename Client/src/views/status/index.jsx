import "./status.module.css";
import { Link, useParams } from "react-router-dom";

function Status() {

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
  
  var { payment_id, status, external_reference, payment_type, merchant_order_id, preference_id } = useParams();
  return (
    <div className="status-container">
      <div>
        <p>Estado de la transacción:</p>
      </div>
      <div className="status-form">
        <div className="status-input-group">
          <label className="status-label">ID de pago:</label>
          <input value={payment_id} className="status-input"></input>
            <label className="status-label">Estado:</label>
            <input value={status} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Numero de referencia:</label>
          <input value={external_reference} className="status-input"></input>
          <label className="status-label">Tipo de pago:</label>
          <input value={payment_type} className="status-input"></input>
        </div>
        <br />
        <br />
        <div className="status-input-group">
          <label className="status-label">Número de orden :</label>
          <input value={merchant_order_id} className="status-input"></input>
          <label className="status-label">Preferencia:</label>
          <input value={preference_id} className="status-input"></input>
        </div>
      </div>
      <Link to="/home/payments">
        <button className="button">Reintentar pago</button>
      </Link>
    </div>
  );
}

export default Status;
