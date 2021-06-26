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

const updatTablero = async (req, res, next) => {
    try {
        const data = req.body;
        const update = await tableroData.updateTablero(data);
        res.send(update);
    } catch (error) {
        res.status(400).send(error.message);
    }
}




module.exports = {
    getAllTableros,
    addTablero,
    updatTablero
}