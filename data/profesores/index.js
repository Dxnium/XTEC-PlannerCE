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
                            .input('estado_registro', sql.VarChar(50), profesordata.estado_registro)

                            .query(sqlQueries.createProfesor);                            
        return true;
    } catch (error) {
        return error.message;
    }
}


const verifProfesor = async(profesordata) => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const profesor = await pool.request()
                            .input('cedula', sql.VarChar, profesordata.cedula)
                            .input('contrasena_prof', sql.VarChar, profesordata.contrasena_prof)
                            .query(sqlQueries.profesorVerifcuenta);
                      
        if(JSON.stringify(profesor.recordset)=='[]'){
            return false;
        }else{
            return true;
        }
        
    } catch (error) {
        return error.message;
    }
}




const updateProfesor = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const update = await pool.request()
                        .input('cedula', sql.VarChar(50), data.cedula)
                        .input('carrera_prof', sql.VarChar(50), data.carrera_prof)
                        
                        .query(sqlQueries.updateProfesor);
        return true;
    } catch (error) {
        return error.message;
    }
}

const updateEstadoProfesor = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const update = await pool.request()
                        .input('cedula', sql.VarChar(50), data.cedula)
                        .input('estado_registro', sql.VarChar(50), data.estado_registro)
                        
                        .query(sqlQueries.updateEstadoProfesor);
        return true;
    } catch (error) {
        return error.message;
    }
}

const deleteProfesor = async (profesordata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profesores');
        const deleteProf = await pool.request()
                            .input('cedula', sql.VarChar(50), profesordata.cedula)
                            .query(sqlQueries.deleteProfesor);
        return true
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getProfesores,
    creatProfesor,
    verifProfesor,
    updateProfesor,
    updateEstadoProfesor,
    deleteProfesor
  
}