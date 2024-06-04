import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import abogadoModel from './models/Abogado.js'
import casoModel from './models/Caso.js'
import citaModel from './models/Cita.js'
import clienteModel from './models/Cliente.js'
import consultaModel from './models/Consulta.js'
import contratoModel from './models/Contrato.js'
import cotizacionModel from './models/Cotizacion.js'
import documentoLegalModel from './models/DocumentoLegal.js'
import documentoLegalModelTipoNoti from './models/DocumentoLegalTipoNotificacion.js'
import documentoLegalTemplateModel from './models/DocumentoTemplate.js'
import pagoClienteModel from './models/pagoCliente.js'
import tipoCasoModel from './models/TipoDeCaso.js'
import tipoNotificacionModel from './models/TipoNotificacion.js'
import usuarioModel from './models/Usuario.js'



config(); // Cargar variables de entorno desde el archivo .env

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;



// Obtener el nombre de este archivo
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// Configuración de Sequelize para entorno local
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/legalTech`, {
  logging: false,
  native: false,
});

// Configuración de Sequelize para despliegue en Render

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
// });

const Caso=casoModel(sequelize)
const Cotizacion=cotizacionModel(sequelize)
const Consulta=consultaModel(sequelize)
const Abogado=abogadoModel(sequelize)
const Cliente=clienteModel(sequelize)
const Contrato=contratoModel(sequelize)
const TipoDeCaso=tipoCasoModel(sequelize)
const DocumentoTemplate=documentoLegalTemplateModel(sequelize)
const DocumentoLegal=documentoLegalModel(sequelize)
const TipoNotificacion=tipoNotificacionModel(sequelize)
const DocumentoLegalTipoNotificacion=documentoLegalModelTipoNoti(sequelize)
const Usuario=usuarioModel(sequelize)
const Cita=citaModel(sequelize)
const PagosClientes=pagoClienteModel(sequelize)

// const basename = path.basename(__filename);
// const modelDefiners = [];



// Leer todos los archivos de modelos y agregarlos a modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
    
//     modelDefiners.push(import(path.join(__dirname, '/models', file)));
//   });

// Esperar a que todas las importaciones de modelos se completen
// await Promise.all(modelDefiners).then(models => {
//   models.forEach(model => model.default(sequelize));
// });

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

// const {
//   Caso,
//   Cotizacion,
//   Consulta,
//   Abogado,
//   Cliente,
//   Contrato,
//   TipoDeCaso,
//   DocumentoTemplate,
//   DocumentoLegal,
//   TipoNotificacion,
//   DocumentoLegalTipoNotificacion,
//   Usuario,
//   Cita
// } = sequelize.models;

TipoDeCaso.belongsToMany(DocumentoTemplate, { through: 'TipoDeCasoDocumentoTemplate' });
DocumentoTemplate.belongsToMany(TipoDeCaso, { through: 'TipoDeCasoDocumentoTemplate' });
DocumentoLegal.belongsToMany(TipoNotificacion, { through: DocumentoLegalTipoNotificacion });
TipoNotificacion.belongsToMany(DocumentoLegal, { through: DocumentoLegalTipoNotificacion });

DocumentoLegal.belongsTo(DocumentoTemplate);
DocumentoLegal.belongsTo(Caso);

Cliente.hasMany(Caso);
Caso.belongsTo(Cliente);

Abogado.hasMany(Caso);
Caso.belongsTo(Abogado);

TipoDeCaso.hasMany(Caso);
Caso.belongsTo(TipoDeCaso);

Caso.hasOne(Cotizacion);

Caso.hasMany(Cita, { foreignKey: 'idCaso' });
Cita.belongsTo(Caso, { foreignKey: 'idCaso' });

Cotizacion.belongsTo(Caso);
Cotizacion.hasOne(Contrato);
Contrato.belongsTo(Cotizacion);
Consulta.belongsTo(Cliente);

Cliente.belongsTo(Usuario);
Abogado.belongsTo(Usuario);

const models ={
  ...sequelize.models,
  conn: sequelize,
}

export { models } ;
