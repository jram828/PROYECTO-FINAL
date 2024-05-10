const { Cliente } = require("../db_conn");

const getClientByEmail = async (email) => {
  const cliente = await Cliente.findOne({
    where: {
      email,
    },
  });
  return cliente;
};

module.exports = {
  getClientByEmail,
};
