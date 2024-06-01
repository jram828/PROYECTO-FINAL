 import { models } from "../../DB.js";
 const {
  Caso,
  Cliente,
  Abogado,
  TipoDeCaso,
  PagosCliente,
} = models
const getCasoId = async (id) => {
  const caso = await Caso.findByPk(id, {
    include: [
      {
        model: Cliente,
        attributes: ["apellido", "nombre"],
      },
      {
        model: Abogado,
        attributes: ["apellido", "nombre"],
      },
      {
        model: TipoDeCaso,
        attributes: ["descripcion", "activo"],
      },
      {
        model: PagosCliente,
        // attributes: ["descripcion", "activo"],
      },
    ],
  });
  if (!caso) throw Error("Caso no Registrado o no existe");
  return caso;
};
// intento subir

export  {
  getCasoId,
};
