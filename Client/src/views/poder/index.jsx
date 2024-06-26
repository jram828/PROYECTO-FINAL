import "./poder.css";
import { printDivContent } from "../../utils/printDivContent";
import { getCasos, getCasoById, getByIdCliente, getByIdAbogado, setAbogado, setCliente } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Poder = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
 

  const caso = location.state?.caso || {};
  
  //const casos = useSelector((state) => state.casos);
  //const caso = useSelector((state) => state.caso);
  
  //const abogado= useSelector((state) => state.abogado)
  
console.log("caso:",caso)

/*useEffect(()=> {
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
    }, [caso.AbogadoCedulaAbogado, dispatch]);*/

  //console.log("abogado:", abogado)

function generatePDF() {
  printDivContent("poder");
}



  return (
    
    <div className="flex flex-col items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
      <div className="flex self-start">
      <Link to={`/home/cases/${caso.idCaso}`}>
       <button className="items-center self-start btn btn-xs border border-accent bg-white hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
            Volver
            </button>
      </Link>
      </div>
      <h1 className="text-2xl font-bold text-black text-center">Poder</h1>
      <br />
      <div className="poder" id="poder">
        <p className="titulopoder">
          <b>
            CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE
            <br />
            {caso?.Cliente?.nombre} {caso?.Cliente?.apellido} Y {caso?.Abogado?.nombre}{" "}
            {caso?.Abogado?.apellido}.
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
            {caso?.Cliente?.nombre?.toUpperCase()} {caso?.Cliente?.apellido?.toUpperCase()},{" "}
          </b>{" "}
          identificado/a como aparece al pie de mi firma, manifiesto que otorgo
          poder especial, amplio y suficiente al doctor{" "}
          <b>
            {caso?.Abogado?.nombre?.toUpperCase()} {caso?.Abogado?.apellido?.toUpperCase()},{" "}
          </b>{" "}
          mayor de edad, identificado con cédula de ciudadanía No{" "}
          <b>{caso?.CedulaAbogadoCedula}</b> abogado en ejercicio con T.P. No 81657
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
              {caso?.Cliente?.nombre?.toUpperCase()} {caso?.Cliente?.apellido?.toUpperCase()}{" "}
              <br />
              C.C. No. {caso?.ClienteCedulaCliente} <br />
              {caso?.Cliente?.calle?.toUpperCase()} {caso?.Cliente?.numero}, {caso?.Cliente?.ciudad}
              <br />
              Cel: {caso?.Cliente?.telefono}
            </h2>
          </div>
          <div className="firmaabogado">
            <p className="firma"> Acepto,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              {caso?.Abogado?.nombre?.toUpperCase()} {caso?.Abogado?.apellido?.toUpperCase()}{" "}
              <br />
              {caso?.CedulaAbogadoCedula}
              <br />
              CARRERA 15 No. 107 - 90 World Trade Center · Torre 3 · Oficina 202{" "}
              <br />
              Cel: {caso?.Abogado?.telefono}
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
      
    </div>
    </div>
    

      
  </div>
  )
}

export default Poder;
