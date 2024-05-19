const { Pagos } = require("../../DB");

const failure = async (body) => {

  const newPago = "";
  console.log("Body pending controller: ", body);
  return body;
};

module.exports = {
  failure,
};
