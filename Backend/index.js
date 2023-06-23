const express = require('express');
//The express() syntax is the equivalent of saying new express(). 
//It creates a new instance of express that you can assign to a variable.
var app = express();
app.set('view engine','ejs');

const path = require('path');
app.use( express.static(path.join(__dirname, 'public')));

var bodyParser = require("body-parser");
//A new body object containing the parsed data is populated 
//on the request object after the middleware (i.e. req.body). 
//This object will contain key-value pairs, 
app.use(bodyParser.json());

//CORS is a node.js package for providing a 
//Connect/Express middleware 
var cors = require('cors')
app.use(cors())

//LINK WITH dbconnect.js :- dbconnect.js will connect with Mongodb
// my_mongoose will capture here export from dbconnect.js - Binding
const my_mongoose = require('./dbconnect_promise.js');

// IMPORT patientController
const PATIENTAPI = require('./controllers/patientAPI.js');

// IMPORT adminController
const ADMINAPI = require('./controllers/adminAPI.js');

//USE URL /patient - route to PatientController 
app.use('/patient', PATIENTAPI);

//USE URL /admin - route to PatientController 
app.use('/admin', ADMINAPI);

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5000, () => console.log('EXPRESS Server Started at Port No: 5000'));