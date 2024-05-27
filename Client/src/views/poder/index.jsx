import "./poder.css";
// import { useSelector } from "react-redux";
import { printDivContent } from "../../utils/printDivContent";

const Poder = () => {
  // const cliente = useSelector((state) => state.cliente);

  // console.log('Cliente poder: ', cliente)
  
function generatePDF() {
  printDivContent("poder");
}

  const cliente = {
    nombre: "Juan Carlos",
    apellido: "Perez Paramo",
    direccion: "Calle 14 # 15 - 90",
    ciudad: "Medellín",
    celular: "3627895641",
    correo: "juan@gmail.com",
    cedula: "78965412",
    valor_pretensiones: "50.000.000",
    valor_pretensiones_letras: "CINCUENTA MILLONES DE PESOS",
    honorarios: "2.000.000",
    honorarios_letras: "DOS MILLONES DE PESOS",
  };

  const abogado = {
    nombre: "Jeronimo Elias",
    apellido: "Manzanares Castillo",
    direccion: "Calle 50 # 70 - 85",
    celular: "3687412536",
    correo: "jeronimo@gmail.com",
    cedulaAbogado: "73698521",
  };

  return (
    <div className="contenedorPoder">
      <h1 className="titulo">Poder</h1>
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
            {cliente.nombre.toUpperCase()} {cliente.apellido.toUpperCase()},{" "}
          </b>{" "}
          identificado/a como aparece al pie de mi firma, manifiesto que otorgo
          poder especial, amplio y suficiente al doctor{" "}
          <b>
            {abogado.nombre.toUpperCase()} {abogado.apellido.toUpperCase()},{" "}
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
          constituyo es: <u>j.avellaneda@aveza.co</u>
        </p>
        <div className="firmas">
          <div className="firmacliente">
            <p className="firma">Atentamente,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              {cliente.nombre.toUpperCase()} {cliente.apellido.toUpperCase()}{" "}
              <br />
              C.C. No. {cliente.cedula} <br />
              {cliente.direccion.toUpperCase()}, {cliente.ciudad}
              <br />
              Cel: {cliente.celular}
            </h2>
          </div>
          <div className="firmaabogado">
            <p className="firma"> Acepto,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              {abogado.nombre.toUpperCase()} {abogado.apellido.toUpperCase()}{" "}
              <br />
              {abogado.cedulaAbogado}
              <br />
              CARRERA 15 No. 107 - 90 World Trade Center · Torre 3 · Oficina 202{" "}
              <br />
              Cel: (57)- 300 1234567
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
  );
};
export default Poder;
