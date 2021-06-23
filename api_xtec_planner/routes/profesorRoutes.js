'use strict';

const express = require('express');
const profesorControll = require('../controllers/profesorController');
const router = express.Router();

router.get('/profesores', profesorControll.getAllProfesores);
//router.get('/estudiante/:id', estudianteControll.getEstudiante);
router.post('/profesor', profesorControll.addProfesor);
//router.put('/estudiante/:id', estudianteControll.updatEstudiante);
//router.delete('/estudiante/:id', estudianteControll.deleteEstudiante);


module.exports = {
    routes: router
}