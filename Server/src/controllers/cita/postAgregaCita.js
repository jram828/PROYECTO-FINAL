const { Cita } = require("../../DB");

const createCita = async (titulo,descripcion, fechaCita, horaCita,idCaso) => {
    
    
    const newCita = await Cita.create({titulo: titulo,descripcion: descripcion,fechaCita: fechaCita, horaCita: horaCita, idCaso: idCaso})

    //  newAbogado.addCliente(clientes);
   
    return newCita
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCita};