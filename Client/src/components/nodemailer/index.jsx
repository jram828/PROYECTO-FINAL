import nodemailer from "nodemailer";

export const sendEmail = (correo) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'legaltech.crm@gmail.com',
      pass: 'Legaltech2024'
    }
  });

  const mailOptions = {
    from: 'legaltech.crm@gmail.com',
    to: correo,
  subject: 'Ingreso al sistema',
    text: 'Acaba de ingresar a Legaltech. Bienvenido!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}