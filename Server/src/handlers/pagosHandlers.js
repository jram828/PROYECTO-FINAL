const {
  getAllPagosClientes,
} = require("../controllers/pagosClientesControllers/getAllPagosClientes");
const {
  createPagosClientes,
} = require("../controllers/pagosClientesControllers/postPagosClientes");

const getPagosClientesHandler = async (req, res) => {
  try {
    const response = await getAllPagosClientes(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postPagosClientesHandler = async (req, res) => {
  // const {
  //   idClient:,
  //   descripcion,
  //   fechaDeAprobacion,
  //   grupoFinancieroId,
  //   orderId,
  //   tipoDePago,
  //   estado,
  //   importeDeLaTransaccion,
  // } = req.body;
  try {
    const response = await createPagosClientes(
      idCliente,
      descripcion,
      fechaDeAprobacion,
      grupoFinancieroId,
      orderId,
      tipoDePago,
      estado,
      importeDeLaTransaccion,
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPagosClientesHandler,
  postPagosClientesHandler,
};

// {idCliente, descripcion, fechaDeAprobacion, grupoFinancieroId, orderId, tipoDePago, estado, importeDeLaTransaccion}
