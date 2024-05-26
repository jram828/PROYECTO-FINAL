const { Pagos } = require("../../DB");

const failure = async (body) => {

  const newPago = "";
  console.log("Body failure controller: ", body);
  return body;
};

module.exports = {
  failure,
};
