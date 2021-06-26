'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

module.exports = {
    //port: PORT,
    host: HOST,
    url: HOST_URL,

    
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        },
    },

};






/*

var debug = require('debug')('app:dbConn');
var express = require('express');
var router = express.Router();

const Sql = require('mssql');

//BASE DE DADES REAL
const config1 = { server: 'api2xtecplanner.database.windows.net', database: 'xtecplannerdb', user: 'xtec', password: 'Jqwerty321.', port: 8080 };
const config2 = { server: "IPapi2xtecplanner.database.windows.net2", database: "daticdb", user: "xtec", password: "Jqwerty321", port: 8080 };
// Conexions

const sql = new Sql.ConnectionPool(config1)
sql.connect()
    .then(function() { 
        debug('Connected to SQL Server1');
    }).catch(function(err) {
        debug('Error connect SQL Server1\n %O', err);
    })

const sqldatic = new sql.ConnectionPool(config2)
sqldatic.connect()
    .then(function() { 
        debug('Connected to SQL Server2');
    }).catch(function(err) {
        debug('Error connect SQL Server2\n %O', err);
    });


module.exports = {"DB1": sql, "DB2": sqldatic}*/