const {
  deleteAbogado,
} = require("../controllers/controllersAbogados/deleteAbogado");
const {
  getAbogadoById,
} = require("../controllers/controllersAbogados/getAbogadoById");
const {
  getAllAbogados,
} = require("../controllers/controllersAbogados/getAllAbogados");
const {
  createAbogadoBd,
} = require("../controllers/controllersAbogados/postAbogadosController");

const getAbogadosHandler = async (req, res) => {
  try {
    const response = await getAllAbogados(req.query);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Creando Abogados
// todo esto a continuacion puedo enviarlo como un objeto para evitar errores, pero debo modificarlo en todos los modulos que esten
const postAbogadosHandler = async (req, res) => {
  const {
    cedulaAbogado,
    matricula,
    nombre,
    apellido,
    correo,
    telefono,
    calle,
    numero,
    codigoPostal,
    ciudad,
    pais,
  } = req.body;

  try {
    const response = await createAbogadoBd(
      cedulaAbogado,
      matricula,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais,
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};

const getAbogadoDetailHandler = async (req, res) => {
  const { cedulaAbogado } = req.query;
  try {
    const response = await getAbogadoById(cedulaAbogado);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json((error = error.message));
  }
};

const deleteAbogadoHandler = async (req, res) => {
  const { cedulaAbogado } = req.body;
  try {
    const response = await deleteAbogado(cedulaAbogado);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAbogadosHandler,
  getAbogadoDetailHandler,
  postAbogadosHandler,
  deleteAbogadoHandler,
};
