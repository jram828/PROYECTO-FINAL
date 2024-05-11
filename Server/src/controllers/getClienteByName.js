const { Cliente } = require('../DB');

const getClienteByName = async (nombre)=>{
    // console.log(name)
    const clienteBd = await Cliente.findAll({where: {
        activo: true,
        nombre: nombre.toUpperCase()}});
    if(!clienteBd) throw Error("Cliente no Registrado o no existe")
    return clienteBd;
}
module.exports = {
    getClienteByName
}