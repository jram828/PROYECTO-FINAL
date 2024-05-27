const { Router } = require("express");
<<<<<<< HEAD
const { getPaymentsHandler, successHandler, failureHandler, pendingHandler, webhookHandler } = require("../handlers/paymentsHandler");
const { crearOrdenHandler } = require("../handlers/paymentsHandler");

=======

const {
  getPaymentsHandler,
  failureHandler,
  pendingHandler,
  webhookHandler,
  statusHandler,
} = require("../handlers/paymentsHandler");

const { crearOrdenHandler } = require("../handlers/paymentsHandler");


>>>>>>> 51d92237903119989773bfccf662e0381c69085c
const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandler);
paymentsRouter.post("/crearorden", crearOrdenHandler);
<<<<<<< HEAD
paymentsRouter.get("/success", successHandler);
paymentsRouter.post("/webhook", webhookHandler);
paymentsRouter.get("/failure", failureHandler);
paymentsRouter.get("/pending", pendingHandler);
=======
paymentsRouter.post("/status", statusHandler);
paymentsRouter.post("/webhook", webhookHandler);

>>>>>>> 51d92237903119989773bfccf662e0381c69085c

module.exports = paymentsRouter;
