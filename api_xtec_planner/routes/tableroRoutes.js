'use strict';

const express = require('express');
const tableroControll = require('../controllers/tableroController');
const router = express.Router();

router.get('/tablero', tableroControll.getAllTableros);
router.post('/tablero/agregar', tableroControll.addTablero);
//router.post('/profesor/agregar', tableroControll.addProfesor);
////router.delete('/profesor/delete', tableroControll.deletProfesor);
//router.post('/profesor/update', tableroControll.updatProfesor);
//router.post('/profesor/updateestado', tableroControll.updatEstadoProfesor);


module.exports = {
    routes: router
}