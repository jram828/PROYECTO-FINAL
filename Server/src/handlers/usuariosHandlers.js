const { getAllUsuario } = require("../controllers/usuario/getAllUsuario");
const { crearUsuario } = require("../controllers/usuario/insertaUsuario");
require("dotenv").config();
const { ACCOUNTSID, AUTHTOKEN, NUMBER } = process.env;
const twilio = require("twilio");

const allUsuarios = async (req, res)=>{
    //const { name } = req.query;
    console.log(req.query)
    //const { pagina=1, porPagina=10 }=req.query
    //const offset=(parseInt(pagina) - 1) * parseInt(porPagina)
      
    try {
        
            const response = await getAllUsuario()
            res.status(200).json(response)
        /*}  else {
            const countyByName = await getClienteByName(name)
            res.status(200).json(countyByName);
        } ;*/
        } catch (error) {
            res.status(400).json({error: error.message})
    }
    
};

const postUsuariosHandler = async (req, res) => {
  const { correo, password, imagen, rol } = req.body;

  try {
    const response = await crearUsuario(
      correo,
      password,
      imagen,
      rol
    );
    if (response) {
      res.status(200).json(response);
      console.log("Datos Twilio:", { ACCOUNTSID, AUTHTOKEN, NUMBER });

      const client = new twilio(ACCOUNTSID, AUTHTOKEN,NUMBER)

      client.messages
        .create({
          body: "Se ha creado un nuevo usuario en Legaltech!",
          from: "+12097210938",
          to: "+573127461628",
        })
        .then((message) => console.log(message.sid))
        .done();
    }
    
    else { res.status(200).send("El usuario ya existe"); }

  } catch (error) {
    // res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};

module.exports = {
 postUsuariosHandler,
 allUsuarios
};