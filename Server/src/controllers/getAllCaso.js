const { Sequelize } = require("sequelize");
const { Caso, Cliente, Abogado, TipoDeCaso } = require("../DB");

const getAllCaso = async (filters)=>{

  const pagina = [];
  const newFilters = {};
  const newOrder = {};
  
  const limit2 = filters.porPagina;

  
    
    const getAllCasoBd = await Caso.findAll({
      where: {
        fechaFin: null,
      },
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
      });

      console.log(getAllCasoBd)

    const datos=getAllCasoBd.map(elemento=>({id:elemento.idCaso,
      descripcion:elemento.descripcion,
      fecha:elemento.fecha,
      nombreCliente:elemento.Cliente.nombre,
      apellidoCliente:elemento.Cliente.apellido,
      nombreabogado:elemento.Abogado.nombre,
      apellidoAbogado:elemento.Abogado.apellido,
      tipoCaso:elemento.TipoDeCaso.descripcion

    }))
    //let datos=[]  
    
    console.log('Esto llega en el query ',filters.query.ordenarPor)
    switch (filters.query.ordenarPor) {
      case 'apellidoCliente':{
        const arregloOrdenado=datos.slice().sort((a, b) => {
          const nombreA = a.apellidoCliente.toUpperCase(); // Convertir a mayúsculas para ordenamiento sin distinción de mayúsculas y minúsculas
          const nombreB = b.apellidoCliente.toUpperCase();
        
          if (nombreA < nombreB) {
            return -1;
          }
          if (nombreA > nombreB) {
            return 1;
          }
          return 0;
        });
       // const arregloOrdenado = datos.slice().sort((a, b) => a.apellidoCliente - b.apellidoCliente);
        console.log(arregloOrdenado)
         return arregloOrdenado
        // Code to execute if expression === value1
        break;}
      case 'apellidoAbogado':{
        const arregloOrdenado=datos.slice().sort((a, b) => {
          const nombreA = a.apellidoAbogado.toUpperCase(); // Convertir a mayúsculas para ordenamiento sin distinción de mayúsculas y minúsculas
          const nombreB = b.apellidoAbogado.toUpperCase();
        
          if (nombreA < nombreB) {
            return -1;
          }
          if (nombreA > nombreB) {
            return 1;
          }
          return 0;
        })
        console.log('Ordenando apellido')
        return datos.sort((a,b)=>a.apellidoAbogado - b.apellidoAbogado)
        break;
      }
      default:
        return datos.sort((a,b)=>a.fecha - b.fecha)
        // Code to execute if expression doesn't match any case
    }

//return getAllCasoBd
    
};


module.exports = {
    getAllCaso,
}