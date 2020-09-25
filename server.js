// =============================================================================
// IMPORT DEPENDENCIES:
// =============================================================================
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
// const http = require('http');
// const https = require('https');
// const url = require('url');


// const privateKey = fs.readFileSync(path.join(__dirname, 'cert', 'key.pem'));
// const certificate = fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'));

// const credentials = {
//   key: privateKey,
//   cert: certificate,
// };

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

// =============================================================================
// CONFIGURATION CONNECTION:
// =============================================================================

require('./config/passport')(passport); // pass passport for configuration

// =============================================================================
// SETUP EXPRESS:
// =============================================================================

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: false
})); /* parse incoming params. req. to req.body */
app.use(bodyParser.json());
app.use(fileUpload());

// =============================================================================
// INITIALIZE EXPRESS-SESSION:
/* exp.sess will allow us to track the logged-in user across sessions */
// =============================================================================

app.use(session({
  secret: 'xfa5family3016zone!',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
})); // session secret

// =============================================================================
// INITIALIZE PASSPORT:
// =============================================================================

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(methodOverride('_method'))

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// =============================================================================
// SERVER STATIC FILES:
// =============================================================================

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname + '/index.html'));
  // res.send('Hello, My first NodeJS App has been deployed!')

});

app.get('/users', function (req, res) {

  res.sendFile(path.join(__dirname + '/html/users.html'));

});

// =============================================================================
// EXT. ROUTES
// =============================================================================

require('./routes/route')(app, passport);

// =============================================================================
// SETUP PORT:
// =============================================================================

const port = process.env.PORT || 5000;
app.listen(port);
console.log('Port is running on: ' + port);