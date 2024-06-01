import { useEffect, useState } from "react";
import "./status.module.css";
import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
import { verificarPago } from "../../handlers/verificarPago";
import Layout from "../../components/layout/layout";
import logo from "../../assets/logo-blue.png";
import { printDivContent } from "../../utils/printDivContent";
// const ACCESSTOKEN = import.meta.env.VITE_ACCESS_TOKEN;

function Status() {
  const [queries, setQueries] = useState({});
  const [datosPago, setDatosPago] = useState({});
  const { search } = useLocation();

  // console.log('Search: ', search)

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

  // console.log("objeto queries: ", queries);
  console.log("Payment id: ", queries.payment_id);

  function generatePDF() {
    printDivContent("comprobante");
  }

  // if (queries.payment_id) {
  useEffect(() => {
    const datos = obtenerPago(queries.payment_id);
    console.log("Informacion del pago: ", datos);
    setDatosPago(datos);
  }, [queries.payment_id]);
  // }

  const obtenerPago = async (id) => {
    console.log("Payment id obtener pago: ", id);
    try {
      const paymentData = await verificarPago(id);
      console.log("Respuesta verificacion pago: ", paymentData);
      setDatosPago(paymentData);
      return paymentData;
    } catch (error) {
      window.alert("No se obtuvieron los datos del pago");
    }
  };

  return (
    // <div className="comprobante">
    <Layout>
      <div
        className="max-w-md mx-auto bg-primary text-white shadow-lg rounded-lg p-6"
      >
        <div id="comprobante">
          <div className="logo-legaltech">
            <img
              src={logo}
              alt="logo-legaltech"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <br />
          <div className="mb-4">
            <p className="text-xl font-semibold">Estado de la transacción</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="input input-bordered flex items-center max-w-xs">
                  ID de pago:  
                  <input value={datosPago.id} className="grow" readOnly />
                </label>
              </div>

              <div>
                <label className="input input-bordered flex items-center max-w-xs">
                  Estado:  
                  <input value={datosPago.status} className="grow" readOnly />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="input input-bordered flex items-center max-w-xs">
                  Valor:  
                  <input
                    value={datosPago.transaction_amount}
                    className="grow"
                    readOnly
                  />
                </label>
              </div>
              <div>
                <label className="input input-bordered flex items-center max-w-xs whitespace-nowrap">
                  {" "}
                  Método de pago:  
                  <input
                    value={datosPago.payment_type_id}
                    className="grow"
                    readOnly
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="">
                <label className="input input-bordered flex items-center max-w-xs">
                  Fecha:  
                  <input
                    type="date"
                    value={datosPago.date_approved}
                    className="grow"
                    readOnly
                  />
                </label>
              </div>

              <div>
                <label className="">
                  Descripción:  
                  <input
                    value={datosPago.description}
                    type="text"
                    className="textarea textarea-bordered h-24 !w-full"
                    placeholder="Descripcion..."
                    readOnly
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/home/payments">
            <button className="btn btn-accent text-white">
              Reintentar pago
            </button>
          </Link>
          <button onClick={generatePDF} className="btn btn-accent text-white">
            Guardar comprobante
          </button>
          <Link to="/home">
            <button className="btn btn-accent text-white">Volver</button>
          </Link>
        </div>
      </div>
    </Layout>
    // </div>
  );
}

export default Status;
