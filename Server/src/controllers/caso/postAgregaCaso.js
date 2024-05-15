const { Caso, Cliente, Abogado, TipoDeCaso } = require("../../DB");

const createCaso = async (cedulaCliente,cedulaAbogado, fecha, descripcion,TipoDeCasoId) => {
    
    const estaCliente= await Cliente.findOne({
        where: {
          cedulaCliente: cedulaCliente,
          activo:true
        }
        })
    if (!estaCliente) return JSON.stringify({ mensaje: "Cliente no encontrado o Cliente eliminado" })

    const estaAbogado= await Abogado.findOne({
            where: {
              cedulaAbogado: cedulaAbogado,
              activo: true
            }
            })
    if (!estaAbogado) return JSON.stringify({ mensaje: "Abogado no encontrado o Abogado eliminado" })

    const estaTipoDeCaso= await TipoDeCaso.findOne({
            where: {
              TipoDeCasoid: TipoDeCasoId,
              activo: true
            }
            })
    if (!estaTipoDeCaso) return JSON.stringify({ mensaje: "Tipo de Caso no encontrado o Tipo de Caso eliminado" })
    
    const newCaso = await Caso.create({fecha: fecha, descripcion: descripcion,TipoDeCasoTipoDeCasoid: TipoDeCasoId,
        ClienteCedulaCliente: cedulaCliente,AbogadoCedulaAbogado: cedulaAbogado})

    //  newAbogado.addCliente(clientes);
   
    return newCaso
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCaso};