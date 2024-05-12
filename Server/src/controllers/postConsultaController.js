const { Consulta } = require("../db_conn");

const createConsultaBd = async (nombre, apellido, correo, telefono, consulta) => {
    
    const newConsulta = await Consulta.create({nombre, apellido, correo, telefono, consulta})
   
    return newConsulta
}  
    
module.exports = {createConsultaBd};