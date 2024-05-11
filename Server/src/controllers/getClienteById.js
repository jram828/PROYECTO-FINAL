const { Cliente} = require('../DB')

const getClienteById = async (cedulaCliente)=>{

    const consulta= {
        where: {
            cedulaCliente:parseInt(cedulaCliente),
            activo:true,
        }
    }
    
    const cliente = await Cliente.findOne(consulta);
    if(!cliente) throw Error("Cliente no Registrado o no existe")
    return cliente;
}

module.exports ={
    getClienteById,
}