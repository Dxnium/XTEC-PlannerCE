'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEstudiantes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const estudiantesList = await pool.request().query(sqlQueries.estudianteslist);
        return estudiantesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getByCarnet = async(carnet) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const estudiante = await pool.request()
                            .input('carnet', sql.VarChar, carnet)
                            .query(sqlQueries.estudiantebyCarnet);
        return estudiante.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatEstudiante = async (estudiantedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const insertEstudiante = await pool.request()
                            .input('carnet', sql.VarChar(50), estudiantedata.carnet)
                            .input('nombre_est', sql.VarChar(50), estudiantedata.nombre_est)
                            .input('primer_apellido_est', sql.VarChar(50), estudiantedata.primer_apellido_est)
                            .input('segundo_apellido_est', sql.VarChar(50), estudiantedata.segundo_apellido_est)
                            .input('correo_est', sql.VarChar(50), estudiantedata.correo_est)
                            .input('contrasena_est', sql.VarChar(50), estudiantedata.contrasena_est)
                            .input('telefono', sql.VarChar(50), estudiantedata.telefono)
                            .input('carrera_est', sql.VarChar(50), estudiantedata.carrera_est)
                            .input('provincia_vive', sql.VarChar(50), estudiantedata.provincia_vive)
                            .input('provincia_reside', sql.VarChar(50), estudiantedata.provincia_reside)
                            .input('intereses_personales', sql.VarChar(256), estudiantedata.intereses_personales)
                            .input('fines', sql.VarChar(50), estudiantedata.fines)
                            .input('estado_registro', sql.VarChar(50), estudiantedata.estado_registro)
               
                            .query(sqlQueries.createEstudiante);                            
        return insertEstudiante.recordset;
    } catch (error) {
        return error.message;
    }
}




const verifEstudiante = async(estudiantedata) => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const estudiante = await pool.request()
                            .input('carnet', sql.VarChar, estudiantedata.carnet)
                            .input('contrasena_est', sql.VarChar, estudiantedata.contrasena_est)
                            .query(sqlQueries.estudianteVerifcuenta);
                      
        if(JSON.stringify(estudiante.recordset)=='[]'){
            return false;
        }else{
            return true;
        }
        
    } catch (error) {
        return error.message;
    }
}


/*
const updateEvent = async (eventId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events2');
        const update = await pool.request()
                        .input('eventId', sql.Int, eventId)
                        .input('eventTitle', sql.NVarChar(100), data.eventTitle)
                        .input('eventDescription', sql.NVarChar(1500), data.eventDescription)
                        .input('startDate', sql.Date, data.startDate)
                        .input('endDate', sql.Date, data.endDate)
                        .input('avenue', sql.NVarChar(200), data.avenue)
                        .input('maxMembers', sql.Int, data.maxMembers)
                        .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events2');
        const deleteEvent = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}*/

module.exports = {
    getEstudiantes,
    creatEstudiante,
    getByCarnet,
    verifEstudiante
    /*creatEvent,
    updateEvent,
    deleteEvent*/
}