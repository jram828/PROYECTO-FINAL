const { Cliente } = require("../db_conn");

const getClientByEmail = async (correo) => {
  const cliente = await Cliente.findOne({
    where: {
      correo,
    },
  });
  return cliente;
};

module.exports = {
  getClientByEmail,
};
