const { createCaso } = require("../controllers/caso/postAgregaCaso");
const { getAllCaso } = require("../controllers/caso/getAllCaso");
const { deleteCaso } = require("../controllers/caso/deleteCaso");
const { getCasoId } = require("../controllers/caso/getCasoById,js");

const createCasosHandler = async (req, res) => {
  const {
    cedulaCliente,
    cedulaAbogado,
    fecha,
    descripcion,
    TipoDeCasoId,
    importe,
  } = req.body;
  //const fecha_caso= new Date(fecha)
  console.log(
    "cedulaCliente",
    cedulaCliente,
    "cedulaAbogado",
    cedulaAbogado,
    "fecha",
    fecha,
    "descripcion",
    descripcion,
    "TipoDeCasoId",
    TipoDeCasoId,
    "importe",
    importe,
  );

  try {
    const response = await createCaso(
      parseInt(cedulaCliente),
      parseInt(cedulaAbogado),
      fecha,
      descripcion,
      TipoDeCasoId,
      importe,
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCasoHandler = async (req, res) => {
  try {
    const response = await getAllCaso(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTipoDeCasoByIdHandler = async (req, res) => {
  console.log(req.params);
  const { idCaso } = req.params;
  try {
    const response = await getCasoId(idCaso);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const deleteCasoHandler = async (req, res) => {
  const { idCaso, fechaFin } = req.body;

  try {
    const response = await deleteCaso(idCaso, fechaFin);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCasosHandler,
  getCasoHandler,
  deleteCasoHandler,
  getTipoDeCasoByIdHandler,
};
