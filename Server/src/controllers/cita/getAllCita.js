const { Sequelize } = require("sequelize");
<<<<<<< HEAD
const { Cita, Caso, Cliente, Abogado,TipoDeCaso } = require('../../DB')

function paginarArreglo(arreglo, paginaActual, tamañoPagina) {
  
  const indiceInicial = (paginaActual) * tamañoPagina;
=======
const { Cita, Caso, Cliente, Abogado, TipoDeCaso } = require("../../DB");

function paginarArreglo(arreglo, paginaActual, tamañoPagina) {
  const indiceInicial = paginaActual * tamañoPagina;
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
  const indiceFinal = indiceInicial + tamañoPagina;
  return arreglo.slice(indiceInicial, indiceFinal);
}

<<<<<<< HEAD

const getAllCita = async (filters)=>{
  console.log(filters.query)
  const consulta= (!filters.query.todos || filters.query.todos==='false') ?
       {
        where: {
          fechaCita: {
            [Sequelize.Op.gt]: new Date()
          }
        },
        attributes: ['idCita', 'titulo', 'descripcion', 'fechaCita'],
        include: [
          {
            model: Caso,
            attributes: ['idCaso', 'fecha', 'descripcion'],
            include: [
              {
                model: Cliente,
                attributes: ['apellido', 'nombre']
              },
              {
                model: Abogado,
                attributes: ['apellido', 'nombre']
              },
              {
                model: TipoDeCaso,
                attributes: ['descripcion']
              }
            ]
          }
        ]
      }
     : {
        attributes: ['idCita', 'titulo', 'descripcion', 'fechaCita'],
        include:{
            model: Caso,
            model: Caso,
            as: 'Caso',
            foreignKey: 'idCaso', // Especifica el campo de clave foránea en Cita
            targetKey: 'idCaso',
            attributes: ['idCaso', 'fecha', 'descripcion'],
            include: [
              {
                model: Cliente,
                attributes: ['apellido', 'nombre']
              },
              {
                model: Abogado,
                attributes: ['apellido', 'nombre']
              },
              {
                model: TipoDeCaso,
                attributes: ['descripcion']
              }
            ]
          }
        
      }
    

    const getAllCitaBd = await Cita.findAll(consulta)
    
    //Obtiene los campos a devolver     
    let datos=getAllCitaBd.map(elemento=>({idCita:elemento.idCita,
        titulo: elemento.titulo, 
        descripcion:elemento.descripcion,
        fechaCita:elemento.fechaCita,
        idCaso: elemento.Caso.idCaso,
        fechaCaso: elemento.Caso.fecha,
        descripcionCaso: elemento.Caso.descripcion,
        nombreCliente:elemento.Caso.Cliente.nombre,
        apellidoCliente:elemento.Caso.Cliente.apellido,
        nombreabogado:elemento.Caso.Abogado.nombre,
        apellidoAbogado:elemento.Caso.Abogado.apellido,
        tipoCaso:elemento.Caso.TipoDeCaso.descripcion
  
      }))
      
      //Filtra de acuerdo a los parametros recibidos    
    Object.entries(filters.query).forEach(([field, value]) => {
        
        if (field !== 'ordenarPor' && field !== 'pagina' && field !== 'porPagina' && field !== 'todos') datos=datos.filter(elemento => elemento[field] === value)
        })
    
   //Ordena de acuerdo al parametro de ordenacion recibido
   let arregloOrdenado=[]
    
   switch (filters.query.ordenarPor) {
     case 'apellidoCliente':{
        arregloOrdenado=datos.slice().sort((a, b) => {
         if (a.apellidoCliente < b.apellidoCliente) return -1;
         if (a.apellidoCliente > b.apellidoCliente) return 1;
 
         // Si apellido es igual, ordena por nombre
         if (a.nombreCliente < b.nombreCliente) return -1;
         if (a.nombreCliente > b.nombreCliente) return 1;
 
         // Si ambos son iguales, no hay cambios en el orden
       return 0;
       });
       break;}
     case 'apellidoAbogado':{
         arregloOrdenado=datos.slice().sort((a, b) => {
         if (a.apellidoAbogado < b.apellidoAbogado) return -1;
         if (a.apellidoAbogado > b.apellidoAbogado) return 1;
 
         // Si apellido es igual, ordena por nombre
         if (a.nombreAbogado < b.nombreAbogado) return -1;
         if (a.nombreAbogado > b.nombreAbogado) return 1;
 
         // Si ambos son iguales, no hay cambios en el orden
         return 0;
       });
       break;
     }
     case 'tipoCaso':{
        arregloOrdenado=datos.slice().sort((a, b) => {
=======
const getAllCita = async (filters) => {
  console.log(filters.query);
  const consulta =
    !filters.query.todos || filters.query.todos === "false"
      ? {
          where: {
            fechaCita: {
              [Sequelize.Op.gt]: new Date(),
            },
          },
          attributes: ["idCita", "titulo", "descripcion", "fechaCita"],
          include: [
            {
              model: Caso,
              attributes: ["idCaso", "fecha", "descripcion"],
              include: [
                {
                  model: Cliente,
                  attributes: ["apellido", "nombre"],
                },
                {
                  model: Abogado,
                  attributes: ["apellido", "nombre"],
                },
                {
                  model: TipoDeCaso,
                  attributes: ["descripcion"],
                },
              ],
            },
          ],
        }
      : {
          attributes: ["idCita", "titulo", "descripcion", "fechaCita"],
          include: {
            model: Caso,
            model: Caso,
            as: "Caso",
            foreignKey: "idCaso", // Especifica el campo de clave foránea en Cita
            targetKey: "idCaso",
            attributes: ["idCaso", "fecha", "descripcion"],
            include: [
              {
                model: Cliente,
                attributes: ["apellido", "nombre"],
              },
              {
                model: Abogado,
                attributes: ["apellido", "nombre"],
              },
              {
                model: TipoDeCaso,
                attributes: ["descripcion"],
              },
            ],
          },
        };

  const getAllCitaBd = await Cita.findAll(consulta);

  //Obtiene los campos a devolver
  let datos = getAllCitaBd.map((elemento) => ({
    idCita: elemento.idCita,
    titulo: elemento.titulo,
    descripcion: elemento.descripcion,
    fechaCita: elemento.fechaCita,
    idCaso: elemento.Caso.idCaso,
    fechaCaso: elemento.Caso.fecha,
    descripcionCaso: elemento.Caso.descripcion,
    nombreCliente: elemento.Caso.Cliente.nombre,
    apellidoCliente: elemento.Caso.Cliente.apellido,
    nombreabogado: elemento.Caso.Abogado.nombre,
    apellidoAbogado: elemento.Caso.Abogado.apellido,
    tipoCaso: elemento.Caso.TipoDeCaso.descripcion,
  }));

  //Filtra de acuerdo a los parametros recibidos
  Object.entries(filters.query).forEach(([field, value]) => {
    if (
      field !== "ordenarPor" &&
      field !== "pagina" &&
      field !== "porPagina" &&
      field !== "todos"
    )
      datos = datos.filter((elemento) => elemento[field] === value);
  });

  //Ordena de acuerdo al parametro de ordenacion recibido
  let arregloOrdenado = [];

  switch (filters.query.ordenarPor) {
    case "apellidoCliente": {
      arregloOrdenado = datos.slice().sort((a, b) => {
        if (a.apellidoCliente < b.apellidoCliente) return -1;
        if (a.apellidoCliente > b.apellidoCliente) return 1;

        // Si apellido es igual, ordena por nombre
        if (a.nombreCliente < b.nombreCliente) return -1;
        if (a.nombreCliente > b.nombreCliente) return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    case "apellidoAbogado": {
      arregloOrdenado = datos.slice().sort((a, b) => {
        if (a.apellidoAbogado < b.apellidoAbogado) return -1;
        if (a.apellidoAbogado > b.apellidoAbogado) return 1;

        // Si apellido es igual, ordena por nombre
        if (a.nombreAbogado < b.nombreAbogado) return -1;
        if (a.nombreAbogado > b.nombreAbogado) return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    case "tipoCaso": {
      arregloOrdenado = datos.slice().sort((a, b) => {
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
        if (a.tipoCaso < b.tipoCaso) return -1;
        if (a.tipoCaso > b.tipoCaso) return 1;

        // Si apellido es igual, ordena por nombre
        if (a.tipoCaso < b.tipoCaso) return -1;
        if (a.tipoCaso > b.tipoCaso) return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
<<<<<<< HEAD
     default:
       arregloOrdenado=datos.slice().sort((a,b)=>a.fechaCita - b.fechaCita)
       
   }

//Devuelve desde la pagina solicitada y la cantidad de elementos solicitados    

let elementos=3
let offset=1
if (filters.query.porPagina) elementos = filters.query.porPagina;
if (filters.query.pagina) offset = (filters.query.pagina - 1) * parseInt(elementos)
  //console.log(arregloOrdenado)
//console.log(datos)
console.log('offset....',offset,'  elementos........',elementos)
const totalPaginas = Math.ceil(arregloOrdenado.length / elementos);  
const paginaActual=paginarArreglo(arregloOrdenado,offset-1,elementos)

return {datosPagina: paginaActual,
       totalPaginas: totalPaginas}
   
};     


module.exports = {
    getAllCita,
}
=======
    default:
      arregloOrdenado = datos.slice().sort((a, b) => a.fechaCita - b.fechaCita);
  }

  //Devuelve desde la pagina solicitada y la cantidad de elementos solicitados

  let elementos = 3;
  let offset = 1;
  if (filters.query.porPagina) elementos = filters.query.porPagina;
  if (filters.query.pagina)
    offset = (filters.query.pagina - 1) * parseInt(elementos);
  //console.log(arregloOrdenado)
  //console.log(datos)
  console.log("offset....", offset, "  elementos........", elementos);
  const totalPaginas = Math.ceil(arregloOrdenado.length / elementos);
  const paginaActual = paginarArreglo(arregloOrdenado, offset - 1, elementos);

  return { datosPagina: paginaActual, totalPaginas: totalPaginas };
};

module.exports = {
  getAllCita,
};
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
