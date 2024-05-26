const { PagosCliente } = require("../../DB");

const getAllPagosClientes = async () => {
  const getAllCasoBd = await PagosCliente.findAll({});

  return getAllPagosClientes;
};

module.exports = {
  getAllPagosClientes,
};
