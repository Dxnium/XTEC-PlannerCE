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
}/*

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
    getAllProfesores,
    addProfesor
    /*getEstudiante,
    updatEvent,
    deleteEvent*/
}