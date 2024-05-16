const { createCaso } = require('../controllers/caso/postAgregaCaso');
const { getAllCaso } = require('../controllers/caso/getAllCaso');
const { deleteCaso } = require('../controllers/caso/deleteCaso')

const createCasosHandler = async (req, res)=>{
    const { cedulaCliente,cedulaAbogado, fecha, descripcion,TipoDeCasoId } = req.body;
    //const fecha_caso= new Date(fecha)
    
    try {
        const response = await createCaso(parseInt(cedulaCliente),parseInt(cedulaAbogado), fecha, descripcion,TipoDeCasoId);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCasoHandler = async (req, res)=>{
    try {
        
        const response = await getAllCaso(req)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteCasoHandler = async (req,res)=>{
    const { idCaso, fechaFin} = req.body

    try {
        const response = await deleteCaso(idCaso,fechaFin);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
        createCasosHandler,getCasoHandler, deleteCasoHandler
    }