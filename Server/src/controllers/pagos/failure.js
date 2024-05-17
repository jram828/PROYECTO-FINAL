const { Pagos } = require("../../DB");

const failure = async (password, email) => {

  const newPago=""
  return {
    access: true,
    pago: newPago,
  };
};

module.exports = {
  failure,
};
