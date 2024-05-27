const nodemailer = require('nodemailer');
const { EMAIL_PASSWORD,EMAIL } = process.env
const fs = require('fs')
const path = require('path');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
});

const sendEmailCliente = ({nombre, correo})=>{

    const templatePath = path.join(__dirname, 'templateCliente.html');
    const htmlTemplate = fs.readFileSync(templatePath, 'Utf8')
    
    const personalizedHtml = htmlTemplate
    .replace('{{nombre}}', nombre)
    .replace('{{correo}}', correo);

    const mailOptions = {
        from: EMAIL,
        to: correo,
        subject: '🚀 lets go!!',
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

module.exports = {
    sendEmailCliente,
    sendEmailCita
}