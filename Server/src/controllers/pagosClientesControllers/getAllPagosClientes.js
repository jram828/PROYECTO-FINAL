const { PagosCliente } = require("../../DB");

const getAllPagosClientes = async () => {
  const getAllCasoBd = await PagosCliente.findAll({});

  return getAllCasoBd;
};

module.exports = {
  getAllPagosClientes,
};
