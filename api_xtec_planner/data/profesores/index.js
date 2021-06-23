'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getProfesores = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const profesoresList = await pool.request().query(sqlQueries.profesoreslist);
        return profesoresList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
/*
const getByCedula = async(cedula) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const estudiante = await pool.request()
                            .input('cedula', sql.VarChar, carnet)
                            .query(sqlQueries.estudiantebyCarnet);
        return estudiante.recordset;
    } catch (error) {
        return error.message;
    }
}*/

const creatProfesor = async (profesordata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const insertProfesor = await pool.request()
                            .input('correo_prof', sql.VarChar(50), profesordata.correo_prof)
                            .input('contrasena_prof', sql.VarChar(50), profesordata.contrasena_prof)
                            .input('nombre_prof', sql.VarChar(50), profesordata.nombre_prof)
                            .input('primer_apellido_prof', sql.VarChar(50), profesordata.primer_apellido_prof)
                            .input('segundo_apellido_prof', sql.VarChar(50), profesordata.segundo_apellido_prof)
                            .input('cedula', sql.VarChar(50), profesordata.cedula)
                            .input('carrera_prof', sql.VarChar(50), profesordata.carrera_prof)
                            .input('carrera_est', sql.VarChar(50), profesordata.carrera_est)
                            .input('estado_registro', sql.VarChar(50), profesordata.estado_registro)

                            .query(sqlQueries.createProfesor);                            
        return insertProfesor.recordset;
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
    getProfesores,
    creatProfesor
    /*getByCarnet
    creatEvent,
    updateEvent,
    deleteEvent*/
}