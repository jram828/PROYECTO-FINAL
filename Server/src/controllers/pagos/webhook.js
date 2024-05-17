const { Pagos } = require("../../DB");

const webhook = async (password, email) => {
  const newPago = "";
  return {
    access: true,
    pago: newPago,
  };
};

module.exports = {
  webhook,
};
