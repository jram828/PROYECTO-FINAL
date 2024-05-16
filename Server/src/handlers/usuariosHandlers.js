const { getAllUsuario } = require("../controllers/usuario/getAllUsuario");

const allUsuarios = async (req, res)=>{
    //const { name } = req.query;
    console.log(req.query)
    //const { pagina=1, porPagina=10 }=req.query
    //const offset=(parseInt(pagina) - 1) * parseInt(porPagina)
      
    try {
        
            const response = await getAllUsuario()
            res.status(200).json(response)
        /*}  else {
            const countyByName = await getClienteByName(name)
            res.status(200).json(countyByName);
        } ;*/
        } catch (error) {
            res.status(400).json({error: error.message})
    }
    
};