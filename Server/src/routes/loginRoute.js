const { Router } = require("express");
<<<<<<< HEAD
const { loginHandler } = require('../handlers/loginHandler')

const loginRouter = Router();

loginRouter.get("/",loginHandler );
=======
const { loginHandler, loginHandlerGoogle } = require('../handlers/loginHandler')

const loginRouter = Router();

loginRouter.get("/", loginHandler);
loginRouter.get("/google", loginHandlerGoogle);
>>>>>>> 51d92237903119989773bfccf662e0381c69085c

module.exports = loginRouter