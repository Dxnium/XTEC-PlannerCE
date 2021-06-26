'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');




const verifAdministrador = async(admindata) => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('administradores');
        const admin = await pool.request()
                            .input('carnet_admin', sql.VarChar, admindata.carnet_admin)
                            .input('contrasena_admin', sql.VarChar, admindata.contrasena_admin)
                            .query(sqlQueries.adminVerifcuenta);
                      
        if(JSON.stringify(admin.recordset)=='[]'){
            return false;
        }else{
            return true;
        }
        
    } catch (error) {
        return error.message;
    }
}


const pendEstAdministrador = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('administradores');
        const estudiantesList = await pool.request().query(sqlQueries.pendientesEstlist);
        return estudiantesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const pendProfAdministrador = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('administradores');
        const profList = await pool.request().query(sqlQueries.pendientesProflist);
        return profList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const actEstAdministrador = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('administradores');
        const estudiantesList = await pool.request().query(sqlQueries.activosEstlist);
        return estudiantesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const actProfAdministrador = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('administradores');
        const profList = await pool.request().query(sqlQueries.activosProflist);
        return profList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    verifAdministrador,
    pendEstAdministrador,
    pendProfAdministrador,
    actEstAdministrador,
    actProfAdministrador

}