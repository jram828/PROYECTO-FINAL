const { Abogado } = require("../db_conn");

const getAllAbogados = async () => {
  const getAllAbogadosBd = await Abogado.findAll();

  return getAllAbogadosBd;
};

module.exports = {
  getAllAbogados,
};
