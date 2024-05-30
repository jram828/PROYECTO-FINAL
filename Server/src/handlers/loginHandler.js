import { getLogin } from '../controllers/usuario/login.js'
import { getLoginGoogle } from '../controllers/usuario/loginGoogle.js'

const loginHandler = async (req, res)=>{
    try {
        const { password, email,rol } = req.query
        const response = await getLogin(password, email,rol)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const loginHandlerGoogle = async (req, res) => {
  try {
    const { email, rol } = req.query;
    const response = await getLoginGoogle(email, rol);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  loginHandler,
  loginHandlerGoogle,
};
