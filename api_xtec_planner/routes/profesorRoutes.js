'use strict';

const express = require('express');
const profesorControll = require('../controllers/profesorController');
const router = express.Router();

router.get('/profesores', profesorControll.getAllProfesores);
router.post('/profesor/verificar', profesorControll.verificarProfesor);
router.post('/profesor/agregar', profesorControll.addProfesor);
router.delete('/profesor/delete', profesorControll.deletProfesor);
router.post('/profesor/update', profesorControll.updatProfesor);
router.post('/profesor/updateestado', profesorControll.updatEstadoProfesor);


module.exports = {
    routes: router
}