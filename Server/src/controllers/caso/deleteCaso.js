const { Caso } = require("../../DB");

const deleteCaso = async (idCaso,fechaFin) => {
  await Caso.update(
    {
        fechaFin: fechaFin,
    },
    {
      where: {
        idCaso: idCaso,
      },
    }
  );
  return JSON.stringify({ mensaje: "Se agrego fecha de fin al caso" })
};

module.exports = {
  deleteCaso,
};