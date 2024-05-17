const { Router } = require("express");
const { getPaymentsHandler, successHandler, failureHandler, pendingHandler } = require("../handlers/paymentsHandler");
const { crearOrdenHandler } = require("../handlers/paymentsHandler");

const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandler);
paymentsRouter.post("/crearorden", crearOrdenHandler);
paymentsRouter.get("/success", successHandler);
paymentsRouter.get("/webhook", webhookHandler);
paymentsRouter.get("/failure", failureHandler);
paymentsRouter.get("/pending", pendingHandler);

module.exports = paymentsRouter;
