const { Abogado } = require("../db_conn");

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
  pais
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
  });

  //  newAbogado.addCliente(clientes);

  return newAbogado;

  // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
};

module.exports = { createAbogadoBd };
