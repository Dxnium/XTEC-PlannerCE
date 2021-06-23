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




module.exports = {
    verifAdministrador

}