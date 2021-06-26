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


const pendientesEstAdministrador = async (req, res, next) => {
    try {

        const estudianteslist = await adminData.pendEstAdministrador();
        res.send(estudianteslist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const pendientesProfAdministrador = async (req, res, next) => {
    try {

        const profesoreslist = await adminData.pendProfAdministrador();
        res.send(profesoreslist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const activosEstAdministrador = async (req, res, next) => {
    try {

        const estlist = await adminData.actEstAdministrador();
        res.send(estlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const activosProfAdministrador = async (req, res, next) => {
    try {

        const profesoreslist = await adminData.actProfAdministrador();
        res.send(profesoreslist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    verificarAdministrador,
    pendientesEstAdministrador,
    pendientesProfAdministrador,
    activosEstAdministrador,
    activosProfAdministrador
}