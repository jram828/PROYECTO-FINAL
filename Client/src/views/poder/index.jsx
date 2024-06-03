import "./poder.css";
import { printDivContent } from "../../utils/printDivContent";
import { getCasos, getCasoById, getByIdCliente, getByIdAbogado, setAbogado, setCliente } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";



const Poder = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
 

  const cliente = location.state?.cliente || {};
  
  const casos = useSelector((state) => state.casos);
  const caso = useSelector((state) => state.caso);
  
  const abogado= useSelector((state) => state.abogado)
  
console.log("cliente:",cliente)

useEffect(()=> {
  dispatch(setAbogado({}))
}, [])


  useEffect(() => {
    dispatch(getCasos()); 
  }, [dispatch]);
    console.log('casos actualizados:', casos);

    useEffect(() => {
      if (casos && casos.datosPagina && cliente) {
        const selectedCase = casos.datosPagina.find((c) => 
          c.nombreCliente === cliente.nombre && c.apellidoCliente === cliente.apellido
        );
        if (selectedCase) {
          dispatch(getCasoById(selectedCase.id));
        }
      }
    }, [casos, cliente, dispatch]);
  
    console.log("caso", caso);

    useEffect(() => {
      if (caso.AbogadoCedulaAbogado) {
        dispatch(getByIdAbogado(caso.AbogadoCedulaAbogado));
      }
      return () => {
        
          dispatch(setAbogado({}));
          dispatch(setCliente({}));
      }
    }, [caso.AbogadoCedulaAbogado, dispatch]);

  //console.log("abogado:", abogado)

function generatePDF() {
  printDivContent("poder");
}

const handleVolver = () => {
  dispatch(setAbogado({}));
  //window.localStorage.setItem("abogado", JSON.stringify({nombre:"", apellido:""}));
  navigate(`/home/detail/${cliente.cedulaCliente}`)


}


  return (
    
    <div className="flex items-center justify-center min-h-screen p-6">
      <h1 className="titulo">Poder</h1>
      {Object.keys(abogado).length === 0 ? 
      <p>Se debe crear un caso</p> :
      <div className="poder" id="poder">
        <p className="titulopoder">
          <b>
            CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE
            <br />
            {cliente.nombre} {cliente.apellido} Y {abogado.nombre}{" "}
            {abogado.apellido}.
          </b>
        </p>
        <br />
        <br />
        <h1 className="encabezadopoder">
          Señores: <br />
          Centros de Conciliación Fundación Acordemos.
          <br />
          Bogotá D.C,.
        </h1>
        <br />
        <p className="parrafopoder">
          Ref.: Proceso trámite de insolvencia de persona natural no comerciante
        </p>
        <p className="parrafopoder">
          <b>
            {cliente.nombre?.toUpperCase()} {cliente.apellido?.toUpperCase()},{" "}
          </b>{" "}
          identificado/a como aparece al pie de mi firma, manifiesto que otorgo
          poder especial, amplio y suficiente al doctor{" "}
          <b>
            {abogado.nombre?.toUpperCase()} {abogado.apellido?.toUpperCase()},{" "}
          </b>{" "}
          mayor de edad, identificado con cédula de ciudadanía No{" "}
          <b>{abogado.cedulaAbogado}</b> abogado en ejercicio con T.P. No 81657
          del Consejo Superior de la Judicatura. Para que me represente en el
          proceso referido en los términos del Título IV del Código General del
          Proceso, Ley 1564 de 2012, inicie y tramite el proceso de negociación
          de deudas y convalidación de acuerdo (insolvencia) del suscrito, como
          persona natural no comerciante, con todos y cada uno de los acreedores
          que se relacionan en la solicitud, en la actualización de la misma o
          cualquier otro.
        </p>
        <p>
          Mi apoderado cuenta con todas las facultades inherentes para el
          ejercicio del presente poder, contemplados en los artículos 73 y 74
          del CGP, y las de conciliar, recibir, objetar, desistir, controvertir,
          sustituir, negociar, presentar recursos y en general adelantar todas
          las actuaciones necesarias para llevar a cabo el presente asunto.
        </p>
        <p>
          Sírvase señor(a) operador en insolvencia, reconocer el poder en los
          efectos mencionado de conformidad con el Decreto 806 del 4 de junio de
          2020, para lo cual me permito indiciar que el correo del apoderado que
          constituyo es: <u>legaltech@gmail.com</u>
        </p>
        <div className="firmas">
          <div className="firmacliente">
            <p className="firma">Atentamente,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              {cliente.nombre?.toUpperCase()} {cliente.apellido?.toUpperCase()}{" "}
              <br />
              C.C. No. {cliente.cedulaCliente} <br />
              {cliente.calle?.toUpperCase()} {cliente.numero}, {cliente.ciudad}
              <br />
              Cel: {cliente.telefono}
            </h2>
          </div>
          <div className="firmaabogado">
            <p className="firma"> Acepto,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              {abogado.nombre?.toUpperCase()} {abogado.apellido?.toUpperCase()}{" "}
              <br />
              {abogado.cedulaAbogado}
              <br />
              CARRERA 15 No. 107 - 90 World Trade Center · Torre 3 · Oficina 202{" "}
              <br />
              Cel: {abogado.telefono}
            </h2>
          </div>
        </div>
        <br />
        <br />
        <footer className="piepoder">
          CARRERA 15 No. 107 - 90 World Trade Center · Torre 3 · Oficina 202
          <br />
          Buenos Aires, Argentina Tel: - Celular: (57)- 300 1234567
          <br />
        </footer>
        <div>
      </div>
      <div className="documentoagenerar">
      <input
        className="inputbox2"
        type="submit"
        name="generar"
        value="Generar PDF"
        onClick={generatePDF}
      />
      <button onClick={handleVolver}>Volver</button>
    </div>
    </div>
    
}
      
  </div>
  )
}

export default Poder;
