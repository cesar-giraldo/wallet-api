var express = require('express');
var router = express.Router();
var db = require('../models');
var util = require('../util/util');

/**
 * Permite obtener el listado de billetes por denominación en la billetera
 */
router.get('/wallet', function(req, res) {
    db.Bill.findAll({
        order: [['denomination','DESC']]
    }).then(function (money) {
        res.send({ data: money });
        res.end();
    }).catch(function(error) {
        res.send({ success: false, error: error.message});
        res.end();
    });
});

/**
 * Permite modificar el numero de billetes de cierta denominación en la billetera
 */
router.post('/wallet/update', function(req, res) {

    // Validamos y capturamos los datos
    var requiredFields = ["denomination"];
    var fieldValidations = util.validateBodyParams(req, requiredFields);

    if (fieldValidations === true) {

        var formData = util.getFormParams(req.body);

        var moneyData = {
            amount : formData.amount,
            total : formData.total
        };

        // Actualizamos el registro
        db.Bill.update(moneyData, {
            where: {
                denomination: formData.denomination
            }
        }).then(function () {
            res.send({ success: true });
            res.end();
        });
    } else {
        res.send({ success: false, error: 'Datos incorrectos'});
        res.end();
    }
});

module.exports = router;
