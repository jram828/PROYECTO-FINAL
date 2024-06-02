 import {models} from "../DB.js";
 const { Consulta } = models
const createConsultaBd = async (nombre, apellido, correo, telefono, consulta) => {
    console.log("Datos Crear consulta controller: ", {
      nombre,
      apellido,
      correo,
      telefono,
      consulta,
    });
    const newConsulta = await Consulta.create({nombre, apellido, correo, telefono, consulta})
   
    return newConsulta
}  
    
export {createConsultaBd};