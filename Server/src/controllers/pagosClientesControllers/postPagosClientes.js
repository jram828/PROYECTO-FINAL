const { PagosCliente } = require("../../DB");

const createPagosClientes = async (
  idCaso,
  description,
  date_approved,
  id,
  orderId,
  payment_type_id,
  status,
  transaction_amount,
) => {
  const newPagoCliente = await PagosCliente.create({
    idCaso,
    descripcion: description,
    fechaDeAprobacion: date_approved,
    pagoId: id,
    orderId,
    tipoDePago: payment_type_id,
    estado: status,
    importeDeLaTransaccion: transaction_amount,
  });

  return newPagoCliente;
};

module.exports = { createPagosClientes };

//TODO *****De acá para abajo es para pruebas manuales*******
//TODO *****Se debe descomentar de aca hacia abajo y comentar todo de aca hacia arriba*******

// const { PagosCliente } = require("../../DB");

// const createPagosClientes = async (
//   idCaso,
//   descripcion,
//   fechaDeAprobacion,
//   pagoId,
//   orderId,
//   tipoDePago,
//   estado,
//   importeDeLaTransaccion,
// ) => {
//   const newPagoCliente = await PagosCliente.create({
//     idCaso,
//     descripcion,
//     fechaDeAprobacion,
//     pagoId,
//     orderId,
//     tipoDePago,
//     estado,
//     importeDeLaTransaccion,
//   });

//   return newPagoCliente;
// };

// module.exports = { createPagosClientes };
