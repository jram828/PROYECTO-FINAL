const { Pagos } = require("../../DB");

const webhook = async (body) => {
  const newPago = "";
  console.log('Body webhook controller: ', body)
  return body;
};

module.exports = {
  webhook,
};
