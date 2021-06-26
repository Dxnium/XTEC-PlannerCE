'use strict';

const express = require('express');
const administradorControll = require('../controllers/administradorController');
const router = express.Router();


router.post('/administrador/verificar', administradorControll.verificarAdministrador);
router.get('/administrador/registrosestpendientes', administradorControll.pendientesEstAdministrador);
router.get('/administrador/registrosprofpendientes', administradorControll.pendientesProfAdministrador);
router.get('/administrador/registrosestactivos', administradorControll.activosEstAdministrador);
router.get('/administrador/registrosprofactivos', administradorControll.activosProfAdministrador);
//router.put('/estudiante/:id', estudianteControll.updatEstudiante);
//router.delete('/estudiante/:id', estudianteControll.deleteEstudiante);



module.exports = {
    routes: router
}