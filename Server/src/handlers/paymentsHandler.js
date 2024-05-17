const { crearOrden } = require('../controllers/pagos/crearOrden')
const { failure } = require('../controllers/pagos/failure')
const { getPayments } = require('../controllers/pagos/getPayments')
const { pending } = require('../controllers/pagos/pending')
const { success } = require('../controllers/pagos/success')

const getPaymentsHandler = async (req, res)=>{
    try {
        const { password, email } = req.query
        const response = await getPayments(password, email)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const successHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await success(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const webhookHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await success(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const failureHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await failure(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const pendingHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await pending(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const crearOrdenHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
      const response = await crearOrden(req.body);
      console.log('response hander:',response)
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPaymentsHandler,
  crearOrdenHandler,
  pendingHandler,
  failureHandler,
  successHandler,
  webhookHandler,
};