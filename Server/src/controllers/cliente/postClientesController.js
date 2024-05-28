
const { Cliente } = require('../../DB')
const { sendEmailCliente} = require("../../utils/emailNotifier");

const createClienteBd = async (
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
  password
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
    password
  });
  if(newCliente) sendEmailCliente(newCliente)
  console.log(newCliente);
  return {
    ...newCliente.toJSON(),
  };
};

module.exports = {
  createClienteBd,
};
