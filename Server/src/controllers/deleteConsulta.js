const { Consulta } = require('../DB')

const deleteConsulta = async (id)=>{
   
    await Consulta.update(
        {
            activo: false
        },{
            where:{
                id : id
            }
        }
    )
    return 'Delete complete'
}

module.exports = {
    deleteConsulta
}