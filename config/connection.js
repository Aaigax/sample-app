var mysql = require('mysql');
// var aws = require('aws-sdk');
// var uuid = require('uuid');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'AlatinaX!83',
//   database: 'db_httpsnodejs',
//   multipleStatements: true
// });

var connection = mysql.createConnection({
  host: process.env('aws-sample.ch17u3pxo3ux.ap-southeast-2.rds.amazonaws.com'),
  user: process.env('admin'),
  password: process.env('AlatinaX!83'),
  database: process.env('aws-sample'),
  port: process.env(3304),
  multipleStatements: true
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }
});
module.exports = connection;