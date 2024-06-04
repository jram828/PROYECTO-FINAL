 import {models} from "../../DB.js";
 const { PagosCliente } = models
const getAllPagosClientes = async () => {
  const getAllCasoBd = await PagosCliente.findAll({});

  return getAllCasoBd;
};

export {
  getAllPagosClientes,
};
