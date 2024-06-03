const validation = (dataRegistro) => {
    const errors = {};

   

    if(dataRegistro.nombre && !/^[a-zA-Z\s]+$/.test(dataRegistro.nombre)) {
        errors.nombre = 'No es un nombre válido'
    }

    if(dataRegistro.apellido && !/^[a-zA-Z\s]+$/.test(dataRegistro.apellido)) {
        errors.apellido = 'No es un apellido válido'
    }

    if(dataRegistro.correo && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dataRegistro.correo)) {
        errors.correo = 'No es un correo válido'
    }

    if(dataRegistro.cedulaCliente && !/^\d+$/.test(dataRegistro.cedulaCliente)) {
        errors.cedulaCliente = 'No es una cédula válida'
    }

    if(dataRegistro.cedulaAbogado && !/^\d+$/.test(dataRegistro.cedulaAbogado)) {
        errors.cedulaAbogado = 'No es una cédula válida'
    }

    if(dataRegistro.matricula && !/^\d+$/.test(dataRegistro.matricula)) {
        errors.matricula = 'No es una matrícula válida'
    }

    if(dataRegistro.telefono && !/^\d+$/.test(dataRegistro.telefono)) {
        errors.telefono = 'No es un teléfono válida'
    }

    if(dataRegistro.calle && !/^[a-zA-Z\s]+$|^\d+$/.test(dataRegistro.calle)) {
        errors.calle = 'No es una calle válida'
    }

    if(dataRegistro.numero && !/^\d+$/.test(dataRegistro.numero)) {
        errors.numero = 'No es un número válida'
    }

    if(dataRegistro.codigoPostal && !/^\d+$/.test(dataRegistro.codigoPostal)) {
        errors.codigoPostal = 'No es una Código postal válida'
    }

    if(dataRegistro.ciudad && !/^[a-zA-Z\s]+$/.test(dataRegistro.ciudad)) {
        errors.ciudad = 'No es una ciudad válida'
    }

    if(dataRegistro.pais && !/^[a-zA-Z\s]+$/.test(dataRegistro.pais)) {
        errors.pais = 'No es un país válida'
    }

    if(dataRegistro.titulo && !/^[a-zA-Z\s]+$/.test(dataRegistro.titulo)) {
        errors.titulo = 'No es una título válido'
    }

    if (dataRegistro.fechaCita) {
        const fechaIngresada = new Date(dataRegistro.fechaCita);
        const fechaActual = new Date();
    
        if (isNaN(fechaIngresada.getTime())) {
            
            errors.fechaCita = 'No es una fecha válida';
        } else if (fechaIngresada <= fechaActual) {
            
            errors.fechaCita = 'La fecha debe ser posterior a la fecha actual';
        }
    }

    if (dataRegistro.horaCita) {
        const [horas, minutos] = dataRegistro.horaCita.split(':');
        const horaIngresada = parseInt(horas, 10);
        if (horaIngresada < 9 || horaIngresada > 17) {
            errors.horaCita = 'La hora debe estar entre las 9:00 am y las 17:00 pm'
    } }

       
    
    return errors;
}

export default validation;