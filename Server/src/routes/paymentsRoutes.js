const { Router } = require("express");
const { getPaymentsHandler } = require("../handlers/paymentsHandler");
// const { postPaymentsHandler } = require("../handlers/paymentsHandler");

const paymentsRouter = Router();

loginRouter.get("/", getPaymentsHandler);
loginRouter.get("/crearorden", crearOrdenHandler);
loginRouter.get("/success", successHandler);
loginRouter.get("/webhook", webhookHandler);

module.exports = {paymentsRouter};
