const { getAllClientes } = require('../controllers/getAllClientes')
const { createClienteBd } = require('../controllers/postClientesController')
const { getClientById } = require('../controllers/getClientByid')
const { deleteCliente } = require('../controllers/deleteCliente')

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

const deleteClienteHandler = async (req, res)=>{
    const { cedulaCliente } = req.query
    try {
        const response = await deleteCliente(cedulaCliente)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getClientesHandler,
    postClienteHandler,
    getClientByIDHandler,
    deleteClienteHandler
}
