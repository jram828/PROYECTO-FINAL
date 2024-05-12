const { TipoDeCaso } = require("../db_conn");

const createTipoDeCaso = async (descripcion) => {
    
    const newTipoDeCaso = await TipoDeCaso.create({descripcion})
   
    return newTipoDeCaso
}  
    
module.exports = {createTipoDeCaso};