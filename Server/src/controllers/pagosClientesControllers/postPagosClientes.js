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
  console.log(
    idCaso,
    description,
    date_approved,
    id,
    orderId,
    payment_type_id,
    status,
    transaction_amount,
  );
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
