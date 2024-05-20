
const { Cita } = require("../../DB");
const moment=require('moment')

const createCita = async (titulo,descripcion, fechaCita, horaCita,idCaso) => {
    
    const fechaUTC= moment(fechaCita).utc().toDate();
    
    const newCita = await Cita.create({titulo: titulo,descripcion: descripcion,fechaCita: fechaUTC, horaCita: horaCita, idCaso: idCaso})

    //  newAbogado.addCliente(clientes);
   
    return newCita
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCita};