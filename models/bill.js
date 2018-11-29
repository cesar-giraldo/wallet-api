/**
 * Bill Model
 * @author Cesar Giraldo - Nov/2018
 */

// Importamos los otros modelos para establecer relaciones
var models = require('../models');

// Instancia del Sequelize
var Sequelize = require('sequelize');

// Prefijo que se usa para nombrar las campos en la base de datos
var prefix = "bill_";
// Instancia que va a contener el modelo
var Bill;


// Objeto con las configuraciones de la Tabla y Modelo
var tableSettings = {
    // Sirve para guardar fecha de creación y modificación
    timestamps: false,
    // Sirve para evitar eliminación física y habilitar eliminación lógica
    paranoid: false,
    // Nombre de la tabla en la base de datos
    tableName: 'bill',
    // Default InnoDB
    engine: 'InnoDB',
    // Formato de codificación de la tabla: default null
    charset: 'utf8',
    // Comentarios sobre la tabla
    comment: "Almacena la información de todos los billetes de la billetera virtual",
    // Métodos generales de la clase
    classMethods: {
        
    },
    // Métodos accesores y modificadores
    getterMethods: {
        
    }
};

/**
 * Modelo que representa la información de los billetes
 * @author Cesar Giraldo - Nov/2018
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*|{}}
 */
module.exports = function (sequelize, DataTypes) {

    Bill = sequelize.define('Bill', {
            // Identificador (Llave Primaria)
            id: {
                type: DataTypes.INTEGER,
                field: prefix + "id",
                primaryKey: true,
                autoIncrement: true
            },
            // Denominacion del Billete
            denomination: {
                type: DataTypes.INTEGER,
                field: prefix + "denomination",
                allowNull: false
            },
            // Cantidad de billetes
            amount: {
                type: DataTypes.INTEGER,
                field: prefix + "amount",
                allowNull: true,
                default: 0
            },
            // Total de dinero que representan los billetes
            total: {
                type: DataTypes.INTEGER,
                field: prefix + "total",
                allowNull: true,
                default: 0
            },
        }, tableSettings);

    return Bill;
};