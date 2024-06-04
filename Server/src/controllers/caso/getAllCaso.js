const { Sequelize } = require("sequelize");
const { Caso, Cliente, Abogado, TipoDeCaso } = require("../../DB");

function paginarArreglo(arreglo, paginaActual, tamañoPagina) {
  const indiceInicial = paginaActual * tamañoPagina;
  const indiceFinal = indiceInicial + tamañoPagina;
  return arreglo.slice(indiceInicial, indiceFinal);
}

const getAllCaso = async (filters) => {
  //Consulta a la base de datos
  const getAllCasoBd = await Caso.findAll({
    where: {
      [Sequelize.Op.or]: [
        { fechaFin: null },
        { fechaFin: { [Sequelize.Op.gt]: Sequelize.literal("CURRENT_DATE") } },
      ],
    },
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
  });

  //Obtiene los campos a devolver
  let datos = getAllCasoBd.map((elemento) => ({
    id: elemento.idCaso,
    descripcion: elemento.descripcion,
    fecha: elemento.fecha,
    nombreCliente: elemento.Cliente.nombre,
    apellidoCliente: elemento.Cliente.apellido,
    nombreabogado: elemento.Abogado.nombre,
    apellidoAbogado: elemento.Abogado.apellido,
    tipoCaso: elemento.TipoDeCaso.descripcion,
  }));

  //Filtra de acuerdo a los parametros recibidos
  Object.entries(filters.query).forEach(([field, value]) => {
    console.log("campo.... ", field, " valor..... ", value);
    if (field !== "ordenarPor" && field !== "pagina" && field !== "porPagina")
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
    default:
      arregloOrdenado = datos.slice().sort((a, b) => a.fecha - b.fecha);
  }

  //Devuelve desde la pagina solicitada y la cantidad de elementos solicitados
  console.log(arregloOrdenado);
  let elementos = 3;
  let offset = 1;
  if (filters.query.porPagina) elementos = filters.query.porPagina;
  if (filters.query.pagina)
    offset = (filters.query.pagina - 1) * parseInt(elementos);

  //console.log('offset....',offset,'  elementos........',elementos)
  const totalPaginas = Math.ceil(arregloOrdenado.length / elementos);
  const paginaActual = paginarArreglo(arregloOrdenado, offset, elementos);
  console.log(paginaActual);
  return { datosPagina: paginaActual, totalPaginas: totalPaginas };
};

module.exports = {
  getAllCaso,
};
