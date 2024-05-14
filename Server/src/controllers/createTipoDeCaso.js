const { TipoDeCaso } = require("../DB");

const createTipoDeCaso = async (descripcion) => {
    
    const newTipoDeCaso = await TipoDeCaso.create({descripcion})
   
    return newTipoDeCaso
}  
    
module.exports = {createTipoDeCaso};