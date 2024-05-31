import { models } from "../../DB.js";

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
  administrador
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
    administrador
  });

  //  newAbogado.addCliente(clientes);

  return newAbogado;

  // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
};

export  { createAbogadoBd };
