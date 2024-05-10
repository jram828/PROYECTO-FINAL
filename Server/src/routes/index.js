const { Router } = require("express");
const abogadosRouter = require("./abogadosRoutes");
const clientesRoutes = require('../routes/clienteRoutes');

const router = Router();

router.use("/abogados", abogadosRouter);
router.use("/clientes", clientesRoutes);

module.exports = router;