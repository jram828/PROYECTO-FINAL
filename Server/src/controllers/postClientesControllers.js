const { Cliente } = require("../DB");

const createCliente = async (cedulaCliente,nombre,apellido,correo,telefono,calle,numero,codigoPostal,ciudad,pais,password) => {
    // console.log('imagen',imagen)

    const [newCliente,creado] = await Cliente.findOrCreate({
        where: {cedulaCliente: cedulaCliente},
        defaults: {nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            calle: calle,
            numero: numero,
            codigoPostal: codigoPostal,
            ciudad: ciudad,
            pais: pais,
            password:password}
    })
   
    if (creado) return newCliente
    return ''
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCliente};