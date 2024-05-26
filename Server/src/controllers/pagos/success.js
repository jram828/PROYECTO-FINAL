const { Pagos } = require("../../DB");

const success = async (body) => {
  const newPago = "";
  console.log("Body success controller: ", body);
  return body;
};

module.exports = {
  success,
};
