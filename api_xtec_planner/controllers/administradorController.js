'use strict';

const adminData = require('../data/administradores');


const verificarAdministrador = async (req, res, next) => {
    try {
        const data = req.body;
        const select = await adminData.verifAdministrador(data);
        res.send(select);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    verificarAdministrador
}