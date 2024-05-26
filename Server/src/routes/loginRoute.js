const { Router } = require("express");
const { loginHandler, loginHandlerGoogle } = require('../handlers/loginHandler')

const loginRouter = Router();

loginRouter.get("/", loginHandler);
loginRouter.get("/google", loginHandlerGoogle);

module.exports = loginRouter