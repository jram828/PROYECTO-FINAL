const { getAllTipoDeCaso } = require('../controllers/getAllTipoDeCaso.js')
const { createTipoDeCaso } = require('../controllers/createTipoDeCaso.js')
const { deleteConsulta } = require('../controllers/deleteConsulta')

const getTipoDeCasoHandler = async (req, res)=>{
    try {
        const response = await getAllTipoDeCaso()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postTipoDeCasoHandler = async (req, res) =>{
    const { descripcion } = req.body
    try {
        const response = await createTipoDeCaso( descripcion)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={postTipoDeCasoHandler,getTipoDeCasoHandler}