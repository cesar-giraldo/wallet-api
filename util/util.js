// Http Success Codes
const CODE_OK = 200;
const CODE_OK_CREATED = 201;
const CODE_OK_ACCEPTED = 202;
const CODE_OK_NO_CONTENT = 204;

// Http Error Codes
const CODE_ERR_BAD_REQUEST = 400;
const CODE_ERR_FORBIDDEN = 401;
const CODE_ERR_NOT_FOUND = 404;
const CODE_ERR_CONFLICT = 409;
const CODE_INTERNAL_ERROR = 500;

// Constante para el tipo de respuesta enviada por la aplicación
const CONTENT_TYPE_JSON = "application/json";

// Constante para controlar la forma de actualización de los modelos
const FORCE_SCHEMA_GENERATION = false;

// Constante para decidir si en la creación de la base de datos se instancian o no llaves foraneas
const BUILD_FOREIGN_KEYS = true;

module.exports = {
 
    /**
     * Permite validar una serie de parámetros en el objeto request, para identificar si no llego alguno de ellos
     * @param req
     * @param requiredFields
     * @returns {*}
     */
    validateBodyParams: function(req, requiredFields) {

        var params = this.getFormParams(req.body);

        if (req) {
            var totalFields = requiredFields.length;
            for (var i = 0; i < totalFields; i++) {

                if (typeof params[requiredFields[i]] === 'undefined' || params[requiredFields[i]] === '') {
                    return requiredFields[i] + " " + __('errors_is_required');
                }
            }
            return true;
        }
        return __('errors_empty_request');
    },
    /**
     * Permite validar una serie de parámetros enviados por GET en la Url de la peticion
     * @param req
     * @param requiredFields
     * @returns {boolean}
     */
    validateQueryParams : function(req, requiredFields) {
        if (req) {
            var totalFields = requiredFields.length;
            for (var i = 0; i < totalFields; i++) {
                if (typeof req.query[requiredFields[i]] === 'undefined' || req.query[requiredFields[i]] === '') {
                    return false;
                }
            }
            return true;
        }
        return false;
    },
    /**
     * Permite transformar los datos enviados en la peticion
     * @param data
     * @returns {*}
     */
    getFormParams : function (data) {
        var index;
        for (index in data) {

            if (typeof data[index] === 'string' && data[index] !== '') {
                data[index] = data[index].trim();
            }

            if (index.substr(0, 1) === '{') {
                data = JSON.parse(index);
                break;
            }
        }
        return data;
    },

    // Export Http Code constants
    CODE_OK : CODE_OK,
    CODE_OK_CREATED : CODE_OK_CREATED,
    CODE_OK_ACCEPTED : CODE_OK_ACCEPTED,
    CODE_OK_NO_CONTENT : CODE_OK_NO_CONTENT,

    CODE_ERR_BAD_REQUEST : CODE_ERR_BAD_REQUEST,
    CODE_ERR_FORBIDDEN : CODE_ERR_FORBIDDEN,
    CODE_ERR_NOT_FOUND : CODE_ERR_NOT_FOUND,
    CODE_ERR_CONFLICT : CODE_ERR_CONFLICT,
    CODE_INTERNAL_ERROR : CODE_INTERNAL_ERROR,

    CONTENT_TYPE_JSON : CONTENT_TYPE_JSON,

    FORCE_SCHEMA_GENERATION : FORCE_SCHEMA_GENERATION,

    BUILD_FOREIGN_KEYS : BUILD_FOREIGN_KEYS,
};