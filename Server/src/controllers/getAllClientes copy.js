
const { Cliente } = require('../db_conn');

const getAllCliente = async(offset,porPagina)=>{
        const consulta= {
            where: {
                activo: true,
            },
            limit: porPagina,
            offset: offset,
          };
   
         const allClient=await Cliente.findAll(consulta);
         return (allClient)
   
 }

module.exports = {
    getAllCliente
}
