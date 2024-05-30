 import { models } from "../../DB.js";
 const { Caso } = models
const getCasoId = async (id) => {
  const caso = await Caso.findByPk(id);
  if (!caso) throw Error("Caso no Registrado o no existe");
  return caso;
};
// intento subir

export  {
  getCasoId,
};
