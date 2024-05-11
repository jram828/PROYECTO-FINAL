const { Consulta } = require("../db_conn");

const getAllConsulta = async ()=>{
    const getAllConsultaBd = await Consulta.findAll({
        where: {
            activo:true
        }
    });

    return getAllConsultaBd;
};


module.exports = {
    getAllConsulta,
}