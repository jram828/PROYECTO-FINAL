import { models } from "../../DB.js";
const {
  ACCOUNTSID,
  AUTHTOKEN,
  NUMBER,
} = process.env;
import twilio from "twilio";

const Abogado = models.Abogado

const createAbogadoBd = async (
  cedulaAbogado,
  matricula,
  nombre,
  apellido,
  correo,
  telefono,
  calle,
  numero,
  codigoPostal,
  ciudad,
  pais,
  password,
  imagen,
  administrador,
) => {
  // console.log('imagen',imagen)

  const newAbogado = await Abogado.create({
    cedulaAbogado,
    matricula,
    nombre,
    apellido,
    correo,
    telefono,
    calle,
    numero,
    codigoPostal,
    ciudad,
    pais,
    password,
    imagen,
    administrador,
  });

        const client = new twilio(ACCOUNTSID, AUTHTOKEN, NUMBER);
  const numero = "+573127461628";
  client.messages
    .create({
      body: "Se ha creado un nuevo Abogado en Legaltech!",
      from: "+12097210938",
      to: numero,
    })
    .then((message) => console.log(message.sid))
    .done();
     

  return newAbogado;

};

export  { createAbogadoBd };
