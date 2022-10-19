// get express framework
const express = require('express');
const app = express();
//get api routes
const contactRoutes = require('./api/routes/contactRoutes');

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
