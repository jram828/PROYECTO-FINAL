const { Cliente } = require("../../DB");

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
