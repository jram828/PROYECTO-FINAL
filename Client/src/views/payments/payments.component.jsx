import './payments.css';
import { Link } from "react-router-dom";
// const PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from 'react';
import { crearPago } from '../../handlers/crearPago';
import Layout from '../../components/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCasos } from '../../redux/actions';

function Payments() {
  // initMercadoPago(PUBLIC_KEY);
  initMercadoPago("APP_USR-b26ba8db-fbe9-410e-af81-4a8481738a84", {
    locale: "es-CO",
  });

  const [userPreference, setUserPreference] = useState({
    quantity: "1",
    unit_price: "",
    idCaso: "",
    description: "Honorarios",
  });

    // const [responsePreference, setResponsePreference] = useState({});
  
  const handlePay = async () => {
    try {
      // Realizar la llamada a la API para crear la orden de pago en MercadoPago
    console.log("Datos crear usuario: ", userPreference);
      const paymentData = await crearPago(userPreference);
      console.log("Respuesta creacion pago: ", paymentData);

      // setResponsePreference(paymentData);
      // Redirigir a la página de pago de MercadoPago
      window.open(paymentData.init_point, "_self");
    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  };

  const handleChangePagos = (e) => {
    setUserPreference({
      ...userPreference,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const dispatch = useDispatch();
  const casos = useSelector((state) => state.casos);

  console.log("casos", casos);

  useEffect(() => {
    dispatch(getCasos());
  }, [dispatch]);
  
  return (
    <Layout>
      <div>
        <div>
          <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md">
            <h1 className="titulo">Realizar un pago</h1>
            <br />
            <h4 className="titulo">Selecciona el caso al cual se va a aplicar el pago e ingresa el valor de los honorarios que deseas pagar.</h4>
            <br />
            <div className="input input-bordered flex items-center gap-2">
              <label htmlFor="correo" className="">
                Valor a pagar:
              </label>
              <input
                name="unit_price"
                type="number"
                value={userPreference.unit_price}
                onChange={handleChangePagos}
                id="unit_price"
                className="grow"
              />
            </div>
            <div className="input input-bordered flex items-center gap-2">
              {/* <label htmlFor="correo" className="">
                Número de caso:  
              </label>
              <input
                name="idCaso"
                type="number"
                value={userPreference.idCaso}
                onChange={handleChangePagos}
                id="idCaso"
                className="grow"
              /> */}
              {casos.datosPagina ? (
                <label className="w-full">
                  <select
                    name="idCaso"
                    id="idCaso"
                    onChange={(event) => handleChangePagos(event)}
                    className="input input-bordered text-lg pl-2 w-full"
                  >
                    <option value="" className="customOption">
                      Seleccionar caso
                    </option>
                    {casos.datosPagina.map((caso) => (
                      <option
                        key={caso.id}
                        value={caso.id}
                        className="customOption"
                      >
                        {`${caso.descripcion} - ${caso.apellidoAbogado}/${caso.apellidoCliente}`}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <label className="w-full">
                  No se encontraron casos para asociar al pago.
                </label>
              )}
            </div>
            <div className="botonescrearusuario">
              <Link to="/home">
                <input
                  type="button"
                  name="Volver"
                  value="Volver"
                  className="btn btn-accent btn-sm"
                />
              </Link>
              <input
                type="button"
                name="Pagar"
                value="Pagar"
                className="btn btn-accent btn-sm"
                onClick={handlePay}
              />
            </div>
            <br />
          </div>
          <div id="wallet_container"></div>

          {/* <Wallet
            onSubmit={handlePay}
            initialization={{ preferenceId: responsePreference.id }}
            customization={{ texts: { valueProp: "smart_option" } }}
          /> */}
        </div>
      </div>
    </Layout>
  );
}

export default Payments