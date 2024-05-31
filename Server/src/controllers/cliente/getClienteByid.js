 import {models} from "../../DB.js";

const { Cliente } = models
const getClienteById = async (cedulaCliente) => {
  const cliente = await Cliente.findOne({
    where: {
      cedulaCliente,
      activo: true,
    },
  });
  return cliente;
};

export {
  getClienteById
};
