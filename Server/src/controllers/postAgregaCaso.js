const { Caso } = require("../db_conn");

const createCaso = async (cedulaCliente,cedulaAbogado, fecha, descripcion,TipoDeCasoId,fechaFin) => {
    // console.log('imagen',imagen)
    console.log('Cliente....',cedulaCliente,'  Abogado..... ',cedulaAbogado)
    const newCaso = await Caso.create({
      fecha: fecha,
      descripcion: descripcion,
      TipoDeCasoId: TipoDeCasoId,
      cedulaCliente: cedulaCliente,
      cedulaAbogado: cedulaAbogado,
      fechaFin: fechaFin,
    });

    //  newAbogado.addCliente(clientes);
   
    return newCaso
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCaso};