'use strict';

const express = require('express');
const tableroControll = require('../controllers/tableroController');
const router = express.Router();

router.get('/tablero', tableroControll.getAllTableros);         
router.post('/tablero/agregar', tableroControll.addTablero);    //Agregar tablero
router.get('/tableros', tableroControll.getTablerosByCarnet);    //Obtener los tableros de estudiante


module.exports = {
    routes: router
}