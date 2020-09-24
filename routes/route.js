module.exports = function (app, passport) {

  const connection = require('../config/connection');

  app.get('/api/users', notLoggedIn, function (req, res) {

    var select = 'SELECT user_id, name, img_path' + ' ';
    var from = 'FROM tbl_users' + ' ';

    var excQuery = select + from;
    connection.query(excQuery, function (err, rows) {

      if (!err) {

        res.send(rows);

        console.log('LOADED | user datas');

      } else {

        console.log(err);

      };

    })

  });

};

// =====================================
// ROUTE MIDDLEWARE:
// =====================================

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
    return next();

  res.redirect('/');

};

function notLoggedIn(req, res, next) {

  if (req.isAuthenticated()) {

    return res.redirect('/');

  }

  next();
};