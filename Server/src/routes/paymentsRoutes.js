const { Router } = require("express");

const {
  getPaymentsHandler,
  failureHandler,
  pendingHandler,
  webhookHandler,
  statusHandler,
} = require("../handlers/paymentsHandler");

const { crearOrdenHandler } = require("../handlers/paymentsHandler");


const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandler);
paymentsRouter.post("/crearorden", crearOrdenHandler);
paymentsRouter.post("/status", statusHandler);
paymentsRouter.post("/webhook", webhookHandler);


module.exports = paymentsRouter;
