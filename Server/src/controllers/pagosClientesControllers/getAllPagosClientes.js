const { Sequelize } = require("sequelize");
const { Caso, Cliente, Abogado, PagosCliente } = require("../../DB");
const getAllPagosClientes = async () => {
  const getAllPagosClientesBd = await PagosCliente.findAll({
    include: [
      {
        model: Caso,
        attributes: ["descripcion"],
        include: [
          {
            model: Abogado,
            attributes: ["apellido", "nombre"],
          },
          {
            model: Cliente,
            attributes: ["apellido", "nombre"],
          },
        ],
      },
    ],
  });

  return getAllPagosClientesBd;
};
module.exports = {
  getAllPagosClientes,
};
