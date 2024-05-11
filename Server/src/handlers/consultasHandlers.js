const { getAllConsulta } = require('../controllers/getAllConsulta')
const { createConsultaBd } = require('../controllers/postConsultaController')
const { deleteConsulta } = require('../controllers/deleteConsulta')

const getConsultaHandler = async (req, res)=>{
    try {
        const response = await getAllConsulta()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postConsultaHandler = async (req, res) =>{
    const { nombre, apellido, correo, telefono, consulta } = req.body
    try {
        const response = await createConsultaBd( nombre, apellido, correo, telefono, consulta)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const deleteConsultaHandler = async (req, res)=>{
    const { id } = req.body
    try {
        const response = await deleteConsulta(correo)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getConsultaHandler,
    postConsultaHandler,
    deleteConsultaHandler
}