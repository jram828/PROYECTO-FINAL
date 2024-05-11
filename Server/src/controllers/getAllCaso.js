const { Caso } = require("../DB");

const getAllCaso = async ()=>{
    const getAllCasoBd = await Caso.findAll({
        where: {
          fechaFin: null,
        },
      });

    return getAllCasoBd;
};


module.exports = {
    getAllCaso,
}