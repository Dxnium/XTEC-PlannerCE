'use strict';

const tableroData = require('../data/tablero');

const getAllTableros = async (req, res, next) => {
    try {

        const tablerolist = await tableroData.getTableros();
        res.send(tablerolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addTablero = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await tableroData.createTablero(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getTablerosByCarnet = async (req, res, next) => {
    try {
        const data = req.body;
        const tableros = await tableroData.getTablerosByCarnet(data);
        res.send(tableros);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllTableros,
    addTablero,
    getTablerosByCarnet
}