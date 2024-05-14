const { Abogado } = require("../../DB");

const deleteAbogado = async (cedulaAbogado) => {
  await Abogado.update(
    {
      activo: false,
    },
    {
      where: {
        cedulaAbogado: cedulaAbogado,
      },
    },
  );
  return "Delete complete";
};

module.exports = {
  deleteAbogado,
};
