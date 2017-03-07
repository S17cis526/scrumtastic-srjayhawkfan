"use strict";
var sqlite3 = require('sqlite');

var db = new sqlite3.Database('scrumtastic.sqlite3');
//creates a new Database

var migrate = require('./src/migrations');

db.run('INSERT INTO projects (name) values ')
