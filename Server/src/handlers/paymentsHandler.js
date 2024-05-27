const { crearOrden } = require("../controllers/pagos/crearOrden");
const { failure } = require("../controllers/pagos/failure");
const { getPayments } = require("../controllers/pagos/getPayments");
const { pending } = require("../controllers/pagos/pending");
const { obtenerPago } = require("../controllers/pagos/status");
const { webhook } = require("../controllers/pagos/webhook");

const getPaymentsHandler = async (req, res) => {
  try {
    const { password, email } = req.query;
    const response = await getPayments(password, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const statusHandler = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await obtenerPago(id);

    // console.log(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const webhookHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    console.log("Webhook mercado pago: ", req.body);
    const response = await webhook(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const failureHandler = async (req, res) => {
  try {
    const failureResponse = req.query;
    const response = await failure(failureResponse);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const pendingHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await pending(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const crearOrdenHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await crearOrden(req.body);
    console.log("response hander:", response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPaymentsHandler,
  crearOrdenHandler,
  pendingHandler,
  statusHandler,
  webhookHandler,
};
