const { Cliente } = require("../../DB");

const eliminaCliente = async (cedulaCliente) => {
    // console.log('imagen',imagen)

    const [updateCount, updateClient] = await Cliente.update({activo:false},{
        where: {
            cedulaCliente: cedulaCliente
        }
    }
);

if (updateCount > 0) {
    return 'Eliminado'
  } else {
    return ''
  }
   
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {eliminaCliente};