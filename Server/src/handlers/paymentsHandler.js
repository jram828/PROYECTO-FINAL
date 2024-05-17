const { getPayments } = require('../controllers/pagos/getPayments')

const getPaymentsHandler = async (req, res)=>{
    try {
        const { password, email } = req.query
        const response = await getPayments(password, email)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const crearOrdenHandler = async (req, res) => {
  try {
    const { password, email } = req.query;
    const response = await crearOrden(password, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    getPaymentsHandler,
    crearOrdenHandler,
}