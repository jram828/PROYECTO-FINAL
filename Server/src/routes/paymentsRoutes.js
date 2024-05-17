const { Router } = require("express");
const { getPaymentsHandler } = require("../handlers/paymentsHandler");
// const { postPaymentsHandler } = require("../handlers/paymentsHandler");

const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandler);
paymentsRouter.get("/crearorden", crearOrdenHandler);
paymentsRouter.get("/success", successHandler);
paymentsRouter.get("/webhook", webhookHandler);

module.exports = {paymentsRouter};
