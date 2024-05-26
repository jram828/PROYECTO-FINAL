const { Cliente, Abogado } = require("../../DB");

const getClientByEmail = async (correo) => {
  const cliente = await Cliente.findOne({
    where: {
      correo,
    },
  });

  if (!cliente) {
    const abogado = await Abogado.findOne({
      where: {
        correo,
      },
    });
    return abogado;
  }

  return cliente;
};

module.exports = {
  getClientByEmail,
};
