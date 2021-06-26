'use strict';

const profData = require('../data/profesores');

const getAllProfesores = async (req, res, next) => {
    try {

        const profesoreslist = await profData.getProfesores();
        res.send(profesoreslist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

/*const getProfesor = async (req, res, next) => {
    try {
        const cedula = req.params.id;
        const profesor = await profData.getByCedula(cedula);
        res.send(profesor);
    } catch (error) {
        res.status(400).send(error.message);
    }
}*/

const addProfesor = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await profData.creatProfesor(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const verificarProfesor = async (req, res, next) => {
    try {
        const data = req.body;
        const select = await profData.verifProfesor(data);
        res.send(select);
    } catch (error) {
        res.status(400).send(error.message);
    }
}





const updatProfesor = async (req, res, next) => {
    try {
        const data =  req.body;
        const updated = await profData.updateProfesor(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatEstadoProfesor = async (req, res, next) => {
    try {
        const data =  req.body;
        const updated = await profData.updateEstadoProfesor(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletProfesor = async (req, res, next) => {
    try {
        const data = req.body;
        const deletedProfesor = await profData.deleteProfesor(data);
        res.send(deletedProfesor);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProfesores,
    addProfesor,
    verificarProfesor,
    updatProfesor,
    updatEstadoProfesor,
    deletProfesor

    /*getEstudiante,
    updatEvent,
    deleteEvent*/
}