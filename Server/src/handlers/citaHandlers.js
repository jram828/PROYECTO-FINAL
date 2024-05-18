const { getAllCita } = require('../controllers/cita/getAllCita')
const { createCita } = require('../controllers/cita/postAgregaCita')


const getCitaHandler = async (req, res)=>{
    try {
        const response = await getAllCita(req)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postCreateCita = async (req, res) =>{
    const { titulo, descripcion, fechaCita, horaCita, idCaso } = req.body
    try {
        const response = await createCita( titulo, descripcion, fechaCita, horaCita, idCaso)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



module.exports = {
    getCitaHandler,
    postCreateCita,
}