'use strict';

// Variable para manipular el File Sysrtem
var fs        = require('fs');

// Variable para manipular las rutas de los directorios
var path      = require('path');

// Variable para acceder a las utilidades de Sequelize
var Sequelize = require('sequelize');

var basename  = path.basename(module.filename);

// entorno de ejecución de la aplicación
var env       = process.env.NODE_ENV || 'development';

// Archivo de configuracion
var config    = require(__dirname + '/../config/config.json')[env];

var db        = {};

// Archivo de utilidades
var util = require('../util/util');

var sequelize;
/**
 * Se determina el entorno sobre el cual corre la aplicación
 */
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/**
 * Logica para obtener la información de todos los modelos
 */
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

/**
 * Se recorren y validan todas las asociaciones
 * entre los modelos de la aplicación
 */
Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

/**
 * Sincronicamos el modelo
 */
sequelize.sync({ force : util.FORCE_SCHEMA_GENERATION });

/**
 * Se inicializa la variable sequelize en la instancia de los modelos
 */
db.sequelize = sequelize;

/**
 * Exportamos la conexión a la base de datos, la cual incluye los modelos
 * @type {{}}
 */
module.exports = db;
