 import {models} from '../DB.js'
 const { Consulta } = models;
const getAllConsulta = async ()=>{
    const getAllConsultaBd = await Consulta.findAll({
        where: {
            activo:true
        }
    });

    return getAllConsultaBd;
};


export {
    getAllConsulta,
}