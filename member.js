$('head')
var mysql = require('mysql');
var express = require('express');

const app = express();

const database = mysql.createConnection({
    host:    'localhost',
    user:    'root',
    password:   null,
    database:  'google_accounts'
});

database.connect((err) => {
    if (err) throw err;
});

class Member {
    #name;
    #email;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return name;
    }

    constructor(name) {
        this.name = name;
        this.email = getEmail(name);
    }

    getEmail(name) {
        let sql = 'SELECT Email FROM google_accounts WHERE Name = ' + name;
        database.query(sql, function(err, res) {
            if (err) throw err;
            return res;
        });
    }

    joinGroup(group) {
        this.#groups.push(group);
        this.#groups[this.#groups.length-1].add_to_group(this.name, this.email);
    }

    leave(name) {
        this.#groups.splice(groups.indexOf(name), 1);
        this.#groups[this.#groups.length-1].removeUser(this.name);
    }

    pay() {
        
    }

}