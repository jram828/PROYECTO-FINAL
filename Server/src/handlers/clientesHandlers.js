const { getAllClientes } = require('../controllers/getAllClientes')
const { createClienteBd } = require('../controllers/postClientesController')
const { getClientById } = require('../controllers/getClientByid')
const { deleteCliente } = require('../controllers/deleteCliente')
const { getClientByEmail } = require("../controllers/getClientByEmail");

const getClientesHandler = async (req, res)=>{
    try {
        const response = await getAllClientes()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postClienteHandler = async (req, res) =>{
    const { cedulaCliente, nombre, apellido, correo, telefono, calle, numero, codigoPostal, ciudad, pais } = req.body
    try {
        const response = await createClienteBd(cedulaCliente, nombre, apellido, correo, telefono, calle, numero, codigoPostal, ciudad, pais)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getClientByIDHandler = async (req, res) =>{
    const { cedulaCliente } = req.query
    
    try {
        const response = await getClientById(cedulaCliente)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getClientByEmailHandler = async (req, res) => {
  const { email } = req.query;

  try {
    const response = await getClientByEmail(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteClienteHandler = async (req, res)=>{
    const { cedulaCliente } = req.query
    try {
        const response = await deleteCliente(cedulaCliente)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

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
        if (foundUser.dataValues.length >0) {
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
  getClientesHandler,
  postClienteHandler,
  getClientByIDHandler,
  deleteClienteHandler,
    getClientByEmailHandler,
  loginHandler,
};
