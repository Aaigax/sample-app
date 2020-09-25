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
  host: 'aws-sample.ch17u3pxo3ux.ap-southeast-2.rds.amazonaws.com',
  user:'admin',
  password: 'AlatinaX!83',
  database: 'db_httpsnodejs',
  port: 3306,
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