'use strict';

const express = require('express');
const estudianteControll = require('../controllers/estudianteController');
const router = express.Router();

router.get('/estudiantes', estudianteControll.getAllEstudiantes);
router.get('/estudiante/:id', estudianteControll.getEstudiante);
router.post('/estudiante', estudianteControll.addEstudiante);
router.post('/estudiante/verificar', estudianteControll.verificarEstudiante);
//router.put('/estudiante/:id', estudianteControll.updatEstudiante);
//router.delete('/estudiante/:id', estudianteControll.deleteEstudiante);


module.exports = {
    routes: router
}