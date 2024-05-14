const { Router } = require("express");
const { loginHandler } = require('../handlers/loginHandler')

const loginRouter = Router();

loginRouter.get("/",loginHandler );

module.exports = loginRouter