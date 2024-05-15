const { TipoDeCaso } = require('../../DB');

const getAllTipoDeCaso = async(offset,porPagina)=>{
        const consulta= {
            where: {
                activo: true,
            },
            limit: porPagina,
            offset: offset,
          };
   
         const allTipoDeCaso=await TipoDeCaso.findAll(consulta);
         return (allTipoDeCaso)
   
 }

module.exports = {
    getAllTipoDeCaso
}