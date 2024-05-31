import { getAllUsuario } from "../controllers/usuario/getAllUsuario.js";
import { crearUsuario } from "../controllers/usuario/insertaUsuario.js";
import dotenv from 'dotenv'
dotenv.config();
const {
  ACCOUNTSID,
  AUTHTOKEN,
  NUMBER,
  OAUTH_CLIENTID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  OAUTH_REDIRECT_URI,
  OAUTH_ACCESS_TOKEN,
} = process.env;
import twilio from "twilio";
import nodemailer from "nodemailer";
import {google} from "googleapis";
import fs from "fs";
// const { MAIL_USERNAME } = process.env;
//require("dotenv").config();

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
      // console.log("Datos google: ", GOOGLE_KEY);
      // const transporter = nodemailer.createTransport({
      //   host: "smtp-mail.outlook.com",
      //   port: 587,
      //   secure: true,
      //   auth: {
      //     user: "julian828@hotmail.com",
      //     pass: GOOGLE_KEY,
      //   },
      //   tls: {
      //     rejectUnauthorized: false,
      //   },
      // });
      // const transporter = nodemailer.createTransport({
      //   host: "smtp.ethereal.email",
      //   port: 587,
      //   auth: {
      //     user: "vida40@ethereal.email",
      //     pass: "6HT7t4MKUJ7yM3w9R7",
      //   },
      // });

        // async function sendEmail(correo, GOOGLE_KEY) {
        //   const info = await transporter.sendMail({
        //     from: '"Legaltech" <legaltech.crm@gmail.com>',
        //     to: correo,
        //     subject: `Hola!`,
        //     text: "Has sido registrado en Legaltech!",
        //   });
        //   console.log("Datos nodemailer: ", correo);
        //   console.log("Message sent: %s", info.messageId);
        // }
      //  await sendEmail();
      const oAuth2Client = new google.auth.OAuth2(
        OAUTH_CLIENTID,
        OAUTH_CLIENT_SECRET,
        OAUTH_REDIRECT_URI
      );

      oAuth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN });

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "legaltech.crm@gmail.com",
          // pass: process.env.MAIL_PASSWORD,
          clientId: OAUTH_CLIENTID,
          clientSecret: OAUTH_CLIENT_SECRET,
          refreshToken: OAUTH_REFRESH_TOKEN,
          accessToken: OAUTH_ACCESS_TOKEN,
        },
      });

      let mailOptions = {
        from: '"Legaltech" <legaltech.crm@gmail.com>',
        to: correo,
        subject: "Registro en Legaltech",
        text: "Bienvenido! Has sido registrado en Legaltech. Ahora puedes utilizar todos nuestros servicios",
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });

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

export {
  postUsuariosHandler,
  allUsuarios,
};
