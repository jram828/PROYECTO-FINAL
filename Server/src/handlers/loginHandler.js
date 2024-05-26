const { getLogin } = require('../controllers/usuario/login')

const loginHandler = async (req, res)=>{
    try {
        const { password, email } = req.query
        const response = await getLogin(password, email)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    loginHandler
}