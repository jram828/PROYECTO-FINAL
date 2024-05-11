const { Cliente } = require("../db_conn");

const deleteCliente = async (cedulaCliente) => {
  await Cliente.update(
    {
      activo: false,
    },
    {
      where: {
        cedulaCliente: cedulaCliente,
      },
    }
  );
  return "Delete complete";
};

module.exports = {
  deleteCliente,
};
