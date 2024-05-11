
const { Abogado } = require('../db_conn')

const getAllAbogados = async ()=>{
    const getAllAbogadosBd = await Abogado.findAll({
        where: {
          activo: true,
        },
      });

  return getAllAbogadosBd;
};

module.exports = {
  getAllAbogados,
};
