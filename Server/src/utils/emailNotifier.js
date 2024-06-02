import nodemailer from 'nodemailer';
const { EMAIL_PASSWORD,EMAIL } = process.env
import fs from 'fs'
import path from 'path';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
});

// const templatePath = path.join(__dirname, "templateCliente.html");
// const htmlTemplate = fs.readFileSync(templatePath, "Utf8");

const sendEmailCliente = ({nombre, correo}) => {
    //   const templatePath = path.join(__dirname, "templateCliente.html");
    //   const htmlTemplate = fs.readFileSync(templatePath, "Utf8");

    //   const personalizedHtml = htmlTemplate
    //     .replace("{{nombre}}", nombre)
    //     .replace("{{correo}}", correo);

    //   const mailOptions = {
    //     from: EMAIL,
    //     to: correo,
    //     subject: "🚀 lets go!!",
    //     html: personalizedHtml,
    //   };

    //   transporter.sendMail(mailOptions, function (error) {
    //     if (error) {
    //       console.log("⚠️" + error);
    //     } else {
    //       console.log("✅ Email sent: " + nombre);
    //     }
    //   });
    
    // console.log("Datos email:", nombre, correo);
    //   const templatePath = path.join(__dirname, "templateCliente.html");  
    //   const htmlTemplate = fs.readFileSync(templatePath, 'Utf8')
    //   console.log('Datos email registro:',nombre,correo)
    //   var personalizedHtml = htmlTemplate
    //   .replace('{{nombre}}', nombre)
    //   .replace('{{correo}}', correo);

    const mailOptions = {
        from: EMAIL,
        to: correo,
        subject: '🚀 Bienvenido a Legaltech!!',
        text: 'Te han registrado en LegalTech.'
    };

    transporter.sendMail(mailOptions, function(error){
        if (error) {
            console.log('⚠️' + error)
        } else {
            console.log('✅ Email sent: '+ nombre)
        }
    })
}

const sendEmailPassword = (nombre, correo, password) => {
    console.log("Datos email:", nombre, correo, password);
    
    const templatePath = path.join(__dirname, "templatePassword.html");
    const htmlTemplate = fs.readFileSync(templatePath, "Utf8");
    console.log("Datos email password:", nombre, correo, password);
    var personalizedHtml = htmlTemplate
      .replace("{{nombre}}", nombre)
      .replace("{{correo}}", correo)
      .replace("{{password}}", password);
  

  const mailOptions = {
    from: EMAIL,
    to: correo,
    subject: "🚀 Recordatorio de contraseña, Legaltech.",
    html: personalizedHtml,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log("⚠️" + error);
    } else {
      console.log("✅ Email sent: " + nombre);
    }
  });
};

const sendEmailCita = (cliente, abogado, newCita)=>{

    const templatePath = path.join(__dirname, 'templateCitas.html');
    const htmlTemplate = fs.readFileSync(templatePath, 'Utf8')

    const personalizedHtml = htmlTemplate
    .replace('{{cliente}}', cliente.nombre)
    .replace('{{abogado}}', abogado.nombre)
    .replace('{{horaCita}}', newCita.horaCita)
    .replace('{{fechaCita}}', newCita.fechaCita);

    const mailOptions = {
        from: EMAIL,
        to: correo,
        subject: `☕ Tienes una nueva cita ${cliente.nombre}`,
        html: personalizedHtml
    };

    transporter.sendMail(mailOptions, function(error){
        if (error) {
            console.log('⚠️' + error)
        } else {
            console.log('✅ Email sent: '+ nombre)
        }
    })
}

export {
    sendEmailCliente,
    sendEmailCita,
    sendEmailPassword
}