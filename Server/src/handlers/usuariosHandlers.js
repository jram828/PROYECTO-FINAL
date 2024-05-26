const { getAllUsuario } = require("../controllers/usuario/getAllUsuario");
const { crearUsuario } = require("../controllers/usuario/insertaUsuario");
require("dotenv").config();
const { ACCOUNTSID, AUTHTOKEN, NUMBER } = process.env;
const twilio = require("twilio");
const nodemailer = require("nodemailer");
const fs = require("fs");
const { GOOGLE_KEY } = process.env;
require("dotenv").config();

const allUsuarios = async (req, res) => {
  console.log(req.query);

  try {
    const response = await getAllUsuario();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUsuariosHandler = async (req, res) => {
  const { correo, password, imagen, rol } = req.body;

  try {
    const response = await crearUsuario(correo, password, imagen, rol);
    if (response) {
      console.log("Datos Twilio:", { ACCOUNTSID, AUTHTOKEN, NUMBER });
      res.status(200).json(response);

      const client = new twilio(ACCOUNTSID, AUTHTOKEN, NUMBER);
      const numero = "+573127461628";
      console.log("Datos google: ", GOOGLE_KEY);
      const transporter = nodemailer.createTransport({
        host: "outlook.office365.com",
        port: 993,
        secure: true,
        auth: {
          user: "julianr_arango@soy.sena.edu.co",
          pass: GOOGLE_KEY,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      async function sendEmail(correo, GOOGLE_KEY) {
        const info = await transporter.sendMail({
          from: '"Legaltech" <legaltech.crm@gmail.com>',
          to: correo,
          subject: `Hola!`,
          text: "Has sido registrado en Legaltech!",
        });
        console.log("Datos nodemailer: ", correo);
        console.log("Message sent: %s", info.messageId);
      }
      sendEmail();

      client.messages
        .create({
          body: "Se ha creado un nuevo usuario en Legaltech!",
          from: "+12097210938",
          to: numero,
        })
        .then((message) => console.log(message.sid))
        .done();
    } else {
      res.status(200).send("El usuario ya existe");
    }
  } catch (error) {
    // res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};

module.exports = {
  postUsuariosHandler,
  allUsuarios,
};
