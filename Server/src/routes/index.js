const { Router } = require("express");
const abogadosRouter = require("./abogadosRoutes");
const clientesRoutes = require('../routes/clienteRoutes');
const consultaRouter = require("./consultaRoutes");
const tipoDeCasosRouter=require('./tipoDeCasosRoutes')
const casosRouter=require('./casosRoutes')
const loginRouter = require('./../routes/loginRoute')

const router = Router();

router.use("/abogados", abogadosRouter);
router.use("/clientes", clientesRoutes);
router.use("/consultas", consultaRouter);
router.use("/tiposdecasos",tipoDeCasosRouter)
router.use("/casos",casosRouter)
router.use("/login",loginRouter)

module.exports = router;