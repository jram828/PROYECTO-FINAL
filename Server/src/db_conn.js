require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY 
} = process.env;

 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/legaltech`, {
   logging: false, 
   native: false, 
 });
// console.log('Dbdeploy: ',DB_DEPLOY)
// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
// });

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
.forEach((file) => {
  modelDefiners.push(require(path.join(__dirname, '/models', file)));
})

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Caso,
        Cotizacion,
        Consulta,
        Abogado,
        Cliente, 
        Contrato, 
        TipoDeCaso, 
        DocumentoTemplate, 
        DocumentoLegal, 
        TipoNotificacion, 
        DocumentoLegalTipoNotificacion 
      } = sequelize.models;

// TipoDeCaso.belongsToMany(DocumentoTemplate, { through: 'TipoDeCasoDocumentoTemplate' })
// DocumentoTemplate.belongsToMany(TipoDeCaso, { through: 'TipoDeCasoDocumentoTemplate' })
// DocumentoLegal.belongsToMany(TipoNotificacion, {through: DocumentoLegalTipoNotificacion})
// TipoNotificacion.belongsToMany(DocumentoLegal,{through: DocumentoLegalTipoNotificacion})

// DocumentoLegal.belongsTo(DocumentoTemplate)
// DocumentoLegal.belongsTo(Caso)

// Caso.belongsTo(Abogado)
// Caso.belongsTo(TipoDeCaso)
// Caso.belongsTo(Cliente)
// Caso.hasOne(Cotizacion)

// Cotizacion.belongsTo(Caso)
// Cotizacion.hasOne(Contrato)
// Contrato.belongsTo(Cotizacion)
// Consulta.belongsTo(Cliente)


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};