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
        const carnet = req.params.id;
        const estudiante = await estData.getByCarnet(carnet);
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
        const insert = await estData.verifEstudiante(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


/*

const updatEvent = async (req, res, next) => {
    try {
        const eventId =  req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await eventData.deleteEvent(eventId);
        res.send(deletedEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
*/
module.exports = {
    getAllEstudiantes,
    addEstudiante,
    getEstudiante,
    verificarEstudiante
    /*updatEvent,
    deleteEvent*/
}