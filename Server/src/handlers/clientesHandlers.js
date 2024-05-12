const { getClienteById } = require("../controllers/getClienteById");
const { getAllClientes } = require("../controllers/getAllClientes");
const { createCliente } = require("../controllers/postClientesController");
const { eliminaCliente } = require("../controllers/postEliminaCliente");
const { actualizaCliente } = require("../controllers/postActualizaClientes");
const { getClientByEmail } = require("../controllers/getClientByEmail");

const clientesHandler = async (req, res) => {
  //const { name } = req.query;
  console.log(req.query);
  const { pagina = 1, porPagina = 10 } = req.query;
  const offset = (parseInt(pagina) - 1) * parseInt(porPagina);
  try {
    const response = await getAllClientes(offset, porPagina);
    res.status(200).json(response);
    /*}  else {
            const countyByName = await getClienteByName(name)
            res.status(200).json(countyByName);
        } ;*/
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const clientesDetailHandler = async (req, res) => {
  const { cedulaCliente } = req.params;
  // res.status(200).send(`Detalle del Usuario ${id}`); //? esto fue de solo prueba de inicio 42:57
  try {
    const response = await getClienteById(cedulaCliente);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json((error = error.message));
  }
};

const postClientesHandler = async (req, res) => {
  const {
    cedulaCliente,
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
 console.log('body post cliente: ', req.body)
  try {
    const response = await createCliente(
      cedulaCliente,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais
    );
    if (response) res.status(200).json(response);
    else res.status(200).send("La cedula ya existe");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postEliminaClientes = async (req, res) => {
  const { cedulaCliente } = req.body;

  try {
    const response = await eliminaCliente(cedulaCliente);
    if (response) res.status(200).json("Cliente eliminado");
    else res.status(204).json("No existe el cliente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActualizaClientes = async (req, res) => {
  const {
    cedulaCliente,
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
    const response = await actualizaCliente(
      cedulaCliente,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais
    );
    if (response) res.status(200).json(response);
    else res.status(204).json("No se actualizo el cliente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getClientByIDHandler = async (req, res) => {
  const { cedulaCliente } = req.query;

  try {
    const response = await getClienteById(cedulaCliente);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getClientByEmailHandler = async (req, res) => {
  const { email } = req.query;

  try {
    const response = await getClientByEmail(email);
    console.log("Response by email:", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error by email:", error.message);
    res.status(400).json({ error: error.message });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.query;
  console.log("Email Query:", cedula);
  console.log("Password Query:", password);

  if (!email || !password || password.length === 0 || email.length === 0) {
    res.status(400).send("Faltan datos");
    console.log("Faltan datos");
  } else {
    try {
      console.log("Email:", email);
      const response = await getClientByEmail(email);

      try {
        if (foundUser.dataValues.length > 0) {
          return res.status(200).json({ access: true });
        } else {
          return res.status(403).send("Usuario o Contraseña incorrectos");
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
    } catch (error) {
      res.status(404).send("Usuario no encontrado");
    }
  }
};

module.exports = {
  clientesHandler,
  clientesDetailHandler,
  postClientesHandler,
  postEliminaClientes,
  postActualizaClientes,
  getClientByIDHandler,
  getClientByEmailHandler,
  loginHandler,
};
