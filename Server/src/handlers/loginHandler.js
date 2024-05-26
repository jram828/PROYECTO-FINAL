const { getLogin } = require('../controllers/usuario/login')
<<<<<<< HEAD

const loginHandler = async (req, res)=>{
    try {
        const { password, email } = req.query
        const response = await getLogin(password, email)
=======
const { getLoginGoogle } = require('../controllers/usuario/loginGoogle')

const loginHandler = async (req, res)=>{
    try {
        const { password, email,rol } = req.query
        const response = await getLogin(password, email,rol)
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

<<<<<<< HEAD
module.exports = {
    loginHandler
}
=======
const loginHandlerGoogle = async (req, res) => {
  try {
    const { email, rol } = req.query;
    const response = await getLoginGoogle(email, rol);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginHandler,
  loginHandlerGoogle,
};
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
