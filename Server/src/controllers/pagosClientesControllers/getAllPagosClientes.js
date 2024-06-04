 import { models } from "../../DB.js";
 const { Caso, Cliente, Abogado, PagosCliente } = models
 const getAllPagosClientes = async () => {
  const getAllPagosClientesBd = await PagosCliente.findAll({
    include: [
      {
        model: Caso,
        attributes: ["descripcion"],
        include: [
          {
            model: Abogado,
            attributes: ["apellido", "nombre"],
          },
          {
            model: Cliente,
            attributes: ["apellido", "nombre"],
          },
        ],
      },
    ],
  });

  return getAllPagosClientesBd;
};

export {
  getAllPagosClientes,
};

