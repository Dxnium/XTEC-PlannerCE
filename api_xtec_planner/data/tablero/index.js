'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTableros = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tablero');
        const tableroList = await pool.request().query(sqlQueries.tablerolist);
        return tableroList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


const createTablero = async (tableroData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tablero');
        const insertTablero = await pool.request()
                            .input('nombre', sql.VarChar(50), tableroData.nombre)
                            .input('descripcion', sql.VarChar(100), tableroData.descripcion)
                            .input('tipo', sql.VarChar(50), tableroData.tipo)
                            .input('est_carnet', sql.VarChar(50), tableroData.est_carnet)
                            .query(sqlQueries.createTablero);                            
        return true;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getTableros,
    createTablero
}