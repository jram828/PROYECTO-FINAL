const { createCaso,getAllCaso } = require('../controllers/postAgregaCaso');

const createCasosHandler = async (req, res)=>{
    const { cedulaCliente,cedulaAbogado, fecha, descripcion,TipoDeCasoId } = req.body;
    const fecha_caso= new Date(fecha)
    console.log('Cliente....',cedulaCliente,'  Abogado..... ',cedulaAbogado)
    try {
        const response = await createCaso(parseInt(cedulaCliente),parseInt(cedulaAbogado), fecha_caso, descripcion,TipoDeCasoId);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCasoHandler = async (req, res)=>{
    try {
        const response = await getAllCaso()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
    module.exports = {
        createCasosHandler,getCasoHandler
    }