const express = require('express');
const mysql = require('mysql');

const app = express();

const database = mysql.createConnection({
    host:    'localhost',
    user:    'root',
    password:   null,
    database:  'auction_users'
});

database.connect((err) => {
    if (err) throw err;
});

function createDatabase() {
    app.get('/createdb', (req, res) => {
        let sql = 'CREATE DATABASE auction_users';
        database.query(sql, (err, result) => {
            if (err) throw err;
        });
    });
}

function createTable(name) {
    app.get('/createtable', (req, res) => {
        let sql = 'CREATE TABLE ' + name + '(Name VARCHAR(255))'; 
        database.query(sql, function(err, result) {
            if (err) throw err;
        });
    });
}


function insert(table_name, name) {
    app.get('/addname', (req, res) => {
        let value = {Name: name};
        let sql = 'INSERT INTO ' + table_name + ' SET ?';
        database.query(sql, value, function(err, res) {
            if (err) throw err;
        });
    });
}

function getNames(table_name) {
    app.get('/getnames', (req, res) => {
        let sql = 'SELECT * FROM ' + table_name;
        database.query(sql, function(err, res) 
        {
            if (err) throw err;
            return res;
        });
    });
}

function findName(table_name, name) {
    app.get('/findname/:name', (req, res) => {
        let sql = 'SELECT * FROM ' + table_name + ' WHERE name = ${req.params.name}';
        database.query(sql, function(err, res) {
            if (err) throw err;
        });
    });
    if (res != "") {
        return true;
    }
    return false;
}

function remove(table_name, name) {
    app.get('/deletename/:name', (req, res) => {
        let sql = 'DELETE FROM ' + table_name + ' WHERE name = ${req.params.name}';
        database.query(sql, function(err, res) {
            if (err) throw err;
        });
    });
}

