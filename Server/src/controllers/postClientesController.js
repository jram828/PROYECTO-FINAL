const { Cliente } = require("../db_conn");

const createCliente = async (
  cedulaCliente,
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
  const newCliente = await Cliente.create({
    cedulaCliente,
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
  console.log(newCliente);
  return {
    ...newCliente.toJSON(),
  };
};

module.exports = {
  createCliente,
};
