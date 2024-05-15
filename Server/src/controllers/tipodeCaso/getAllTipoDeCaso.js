const { TipoDeCaso } = require('../../DB');

const getAllTipoDeCaso = async(offset,porPagina)=>{
        
        const totalRegistros=TipoDeCaso.count({
            where: {
              activo: true
            }
          });
        const totalPagina=Math.ceil(totalRegistros / porPagina); 
        const consulta= {
            where: {
                activo: true,
            },
            limit: porPagina,
            offset: offset,
          };
   
         const allTipoDeCaso=await TipoDeCaso.findAll(consulta);
         return ({
            totalPaginas: totalPagina,
            allTipoDeCaso: allTipoDeCaso
                })
   
 }

module.exports = {
    getAllTipoDeCaso
}