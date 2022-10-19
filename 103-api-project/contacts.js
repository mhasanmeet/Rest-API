// get express framework
const express = require('express');
const app = express();
//get api routes
const contactRoutes = require('./api/routes/contactRoutes');
//get morgan
const morgan = require('morgan');
//body parser
const bodyParser = require('body-parser');
// use cors
const cors = require('cors');

// //use morgan
// app.use(morgan('dev'))
// // use bodyParser
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use(cors())

// set PORT 
const PORT = process.env.PORT || 4000

// we separate routes file and put these in "api/routes/contactsRoutes"
app.use('/contacts', contactRoutes)

// root route "/"
app.get('/', (req, res) =>{
    res.send('hello World');
})

//Listen to browser
app.listen(PORT)
