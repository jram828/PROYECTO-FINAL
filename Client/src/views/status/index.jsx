import { useEffect, useState } from "react";
import "./status.module.css";
import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
import { verificarPago } from "../../handlers/verificarPago";

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
    
      <div
      className="flex flex-col items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black"
      >
        <div id="comprobante" className="space-y-6 w-full max-w-xl h-full p-6 bg-secondary rounded-lg shadow-md text-black">
          
            <h1 className="text-2xl font-bold text-black text-center">Estado de la transacción</h1>
          

          <div className="flex flex-col space-y-3 items-center">
            
             
                <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black text-xs">
                  ID de pago:  
                  <input value={datosPago.id} className="grow ml-2 text-black" disabled />
                </label>
              

              
                <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black text-xs">
                  Estado:  
                  <input value={datosPago.status} className="grow ml-2 text-black" disabled />
                </label>
              
                <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black text-xs">
                  Valor:  
                  <input
                    value={datosPago.transaction_amount}
                    className="grow ml-2 text-black" disabled
                  />
                </label>
              
              
                <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black text-xs">
                  {" "}
                  Método de pago:  
                  <input
                    value={datosPago.payment_type_id}
                    className="grow ml-2 text-black" disabled
                  />
                </label>
            
              
                <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black text-xs">
                  Fecha:  
                  <input
                    type="date"
                    value={datosPago.date_approved}
                    className="grow ml-2 text-black" disabled
                  />
                </label>
            
              
                <label className="">
                   
                  <input
                    value={datosPago.description}
                    type="text"
                    className="textarea !w-80 !border-black !text-black text-xs h-24"
                    placeholder="Descripcion..."
                    disabled
                  />
                </label>
             
          </div>
        

        <div className="mt-6 flex justify-center gap-2">
          {/* <Link to="/home">
          <button className="btn btn-xs border border-accent bg-white hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
              Volver
              </button>
            </Link> */}
              
            <Link to="/home/payments">
              <button className="btn btn-xs bg-white text-black  border-error w-35 flex items-center justify-center">
                Reintentar pago
              </button>
            </Link>

            <button onClick={generatePDF} className="btn btn-xs  bg-white text-black  border-success w-35 flex items-center justify-center">
              Guardar comprobante
            </button>
          
        </div>
      </div>
   
     </div>
  );
}

export default Status;
