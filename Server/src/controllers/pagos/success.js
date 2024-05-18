const { Pagos } = require("../../DB");

const success = async (password, email) => {
  const newPago = "";
  return {
    access: true,
    pago: newPago,
  };
};

module.exports = {
  success,
};
