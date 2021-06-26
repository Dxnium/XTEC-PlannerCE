'use strict';

const express = require('express');
const estudianteControll = require('../controllers/estudianteController');
const router = express.Router();

router.get('/estudiantes', estudianteControll.getAllEstudiantes);
router.post('/estudiante/infoRegistro', estudianteControll.getEstudiante);
router.post('/estudiante/agregar', estudianteControll.addEstudiante);
router.post('/estudiante/verificar', estudianteControll.verificarEstudiante);
router.post('/estudiante/update', estudianteControll.updatEstudiante);
router.post('/estudiante/updateestado', estudianteControll.updatEstadoEstudiante);
router.delete('/estudiante/delete', estudianteControll.deletEstudiante);


module.exports = {
    routes: router
}