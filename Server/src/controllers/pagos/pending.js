const { Pagos } = require("../../DB");

const pending = async (password, email) => {
  const newPago = "";
  return {
    access: true,
    pago: newPago,
  };
};

module.exports = {
  pending,
};
