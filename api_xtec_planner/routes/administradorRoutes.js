'use strict';

const express = require('express');
const administradorControll = require('../controllers/administradorController');
const router = express.Router();


router.post('/administrador/verificar', administradorControll.verificarAdministrador);
//router.put('/estudiante/:id', estudianteControll.updatEstudiante);
//router.delete('/estudiante/:id', estudianteControll.deleteEstudiante);


module.exports = {
    routes: router
}