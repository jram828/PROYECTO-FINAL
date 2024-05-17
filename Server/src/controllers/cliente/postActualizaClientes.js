const { Cliente } = require("../../DB");

const actualizaCliente = async (cedulaCliente,nombre,apellido,correo,telefono,calle,numero,codigoPostal,ciudad,pais,password) => {
    // console.log('imagen',imagen)

    const [updateCount, updateClient] = await Cliente.update({nombre: nombre, 
                                                              apellido: apellido,
                                                            correo:correo,
                                                            telefono: telefono,
                                                            calle: calle,
                                                            numero: numero,
                                                            codigoPostal: codigoPostal,
                                                            ciudad: ciudad,
                                                            pais: pais,
                                                            password:password },{
        where: {
            cedulaCliente: cedulaCliente
        }
    }
);

if (updateCount > 0) {
    return 'Actualizado'
  } else {
    return ''
  }
   
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {actualizaCliente};

