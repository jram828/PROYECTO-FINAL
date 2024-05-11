const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("Cliente", {
      cedulaCliente:{
        type: DataTypes.INTEGER,
        primaryKey: true, 
      },
      nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1,20]
        }
      },
      apellido:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1,20]
        }
      },
      correo:{
        type: DataTypes.STRING,
        unique: true,
        validate:{
          len: [1,50]
        }
      },
      telefono:{
        type: DataTypes.INTEGER,
        unique: true
      },
      calle:{
        type: DataTypes.STRING,
        validate:{
          len: [1,20]
        }
      },
      numero:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      codigoPostal:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ciudad:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1,20]
        }
      },
      pais:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1,20]
        }
      },
      activo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    })
  }
