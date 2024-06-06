import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const DocumentoLegal=sequelize.define('DocumentoLegal', {
        urlDocumento:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return DocumentoLegal
}