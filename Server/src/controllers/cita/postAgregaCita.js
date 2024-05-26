
<<<<<<< HEAD
const { Cita, Caso, Cliente, Abogado } = require("../../DB");
const moment=require('moment');
const { sendEmailCita } = require("../../utils/emailNotifier");
=======
const { Cita } = require("../../DB");
const moment=require('moment')
>>>>>>> 51d92237903119989773bfccf662e0381c69085c

const createCita = async (titulo,descripcion, fechaCita, horaCita,idCaso) => {
    
    const fechaUTC= moment(fechaCita).utc().toDate();
    
    const newCita = await Cita.create({titulo: titulo,descripcion: descripcion,fechaCita: fechaUTC, horaCita: horaCita, idCaso: idCaso})
<<<<<<< HEAD
    const {cedulaCliente, cedulaAbogado} = await Caso.findOne(idCaso)

    if(cedulaCliente && cedulaAbogado){
        const cliente = await Cliente.findOne(cedulaCliente)
        const abogado = await Abogado.findOne(cedulaAbogado)
        if(cliente && abogado){
            sendEmailCita(cliente,
                          abogado,
                          newCita
                         )
        }
    }

=======
>>>>>>> 51d92237903119989773bfccf662e0381c69085c

    //  newAbogado.addCliente(clientes);
   
    return newCita
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCita};