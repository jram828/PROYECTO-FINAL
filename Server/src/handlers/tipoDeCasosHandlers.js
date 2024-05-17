const { getAllTipoDeCaso } = require('../controllers/tipodeCaso/getAllTipoDeCaso.js')
const { createTipoDeCaso } = require('../controllers/tipodeCaso/createTipoDeCaso.js')
const { deleteTipoDeCaso } = require('../controllers/tipodeCaso/deleteTipoDeCaso.js')

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

const deleteTipoDeCasoHandler = async (req, res) =>{
    const { TipoDeCasoid } = req.body
    try {
        const response = await deleteTipoDeCaso( TipoDeCasoid)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={postTipoDeCasoHandler,getTipoDeCasoHandler,deleteTipoDeCasoHandler}