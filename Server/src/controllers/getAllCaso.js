const { Caso } = require("../db_conn");

const getAllCaso = async ()=>{
    const getAllCasoBd = await Caso.findAll();

    return getAllCasoBd;
};


module.exports = {
    getAllCaso,
}

// {
//         where: {
//           fechaFin: null,
//         },
//       }