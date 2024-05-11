
const { Abogado } = require("../db_conn");


const getAbogadoById = async (cedulaAbogado) => {
  console.log(cedulaAbogado);
  const abogado = await Abogado.findByPk(cedulaAbogado);
  if (!abogado) throw Error("Abogado no Registrado o no existe");
  return abogado;
};

module.exports = {
  getAbogadoById,
};
