const { Router } = require("express");

const { checkoutHandler, getPaymentsHandler, statusHandler, webhookHandler } = require("../handlers/checkoutHandler");

const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandler);
paymentsRouter.post("/checkout", checkoutHandler);
paymentsRouter.post("/status", statusHandler);
paymentsRouter.post("/webhook", webhookHandler);


module.exports = paymentsRouter;
