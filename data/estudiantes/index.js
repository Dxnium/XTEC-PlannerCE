'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const sql2 = require('mssql');

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

const getByCarnet = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const estudiante = await pool.request()
                            .input('carnet', sql.VarChar, data.carnet)
                            .query(sqlQueries.estudiantebyCarnet);
        return estudiante.recordset;
    } catch (error) {
        return error.message;
    }
}

const existeEstudiantedatic = async(data) => {
    try {
        let pool = await sql2.connect(config.sqldatic);
       
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const estudiante = await pool.request()
                            .input('carnet', sql2.VarChar, data.carnet)
                            .input('contrasena_est', sql2.VarChar, data.contrasena_est)
                            .query(sqlQueries.estudianteExiste);
                            
        if(JSON.stringify(estudiante.recordset)=='[]'){
            return false;
        }else{
            return true;
        }
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
        return true;
    } catch (error) {
        return error.message;
    }
}


const envSolicAmistadEstudiante = async (estudiantedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const insertEstudiante = await pool.request()
                            .input('carnet', sql.VarChar(50), estudiantedata.carnet)
                            .input('carnet_amigo', sql.VarChar(50), estudiantedata.carnet_amigo)
                            .input('nombre_amigo', sql.VarChar(50), estudiantedata.nombre_amigo)
                            .input('apellido1_amigo', sql.VarChar(50), estudiantedata.apellido1_amigo)
                            .input('apellido2_amigo', sql.VarChar(50), estudiantedata.apellido2_amigo)
                            .input('estado', sql.VarChar(50), estudiantedata.estado)
               
                            .query(sqlQueries.enviarSolicitudAmistad);                            
        return true;
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



const updateEstudiante = async (estudiantedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const update = await pool.request()
                        .input('correo_est', sql.VarChar(50), estudiantedata.correo_est)
                        .input('telefono', sql.VarChar(50), estudiantedata.telefono)
                        .input('carrera_est', sql.VarChar(50), estudiantedata.carrera_est)
                        .input('provincia_reside', sql.VarChar(50), estudiantedata.provincia_reside)
                        .input('carnet', sql.VarChar(50), estudiantedata.carnet)
    
                        .query(sqlQueries.updateEstudiante);
        return true;
    } catch (error) {
        return error.message;
    }
}

const updateEstadoEstudiante = async (estudiantedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const update = await pool.request()
                        .input('estado_registro', sql.VarChar(50), estudiantedata.estado_registro)
                        .input('carnet', sql.VarChar(50), estudiantedata.carnet)
    
                        .query(sqlQueries.updateEstadoEstudiante);

        return true;
    } catch (error) {
        return error.message;
    }
}



const deleteEstudiante = async (estudiantedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estudiantes');
        const deleteEst = await pool.request()
                            .input('carnet', sql.VarChar, estudiantedata.carnet)
                            .query(sqlQueries.deleteEstudiante);
        return true
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEstudiantes,
    creatEstudiante,
    getByCarnet,
    verifEstudiante,
    updateEstudiante,
    updateEstadoEstudiante,
    deleteEstudiante,
    envSolicAmistadEstudiante,

    existeEstudiantedatic
}