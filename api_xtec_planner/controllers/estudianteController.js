'use strict';

const estData = require('../data/estudiantes');

const getAllEstudiantes = async (req, res, next) => {
    try {

        const estudianteslist = await estData.getEstudiantes();
        res.send(estudianteslist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEstudiante = async (req, res, next) => {
    try {
        const data = req.body;
        const estudiante = await estData.getByCarnet(data);
        res.send(estudiante);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const addEstudiante = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await estData.creatEstudiante(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const verificarEstudiante = async (req, res, next) => {
    try {
        const data = req.body;
        const select = await estData.verifEstudiante(data);
        res.send(select);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const updatEstudiante = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await estData.updateEstudiante(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatEstadoEstudiante = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await estData.updateEstadoEstudiante(data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}





const deletEstudiante = async (req, res, next) => {
    try {
        const data = req.body;
        const deletedEstudiante = await estData.deleteEstudiante(data);
        res.send(deletedEstudiante);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllEstudiantes,
    addEstudiante,
    getEstudiante,
    verificarEstudiante,
    updatEstudiante,
    updatEstadoEstudiante,
    deletEstudiante
    /*updatEvent,
    deleteEvent*/
}