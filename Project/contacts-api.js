// get express framework
const express = require('express');
const contactRoute = require('./api/routes/contact-routes');
//morgan
const morgan = require('morgan');
//body parser
const bodyParser = require('body-parser');
// use cors
const cors = require('cors');
// use express
const app = express();
//use morgan
app.use(morgan('dev'))
// use bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// set PORT 
const PORT = process.env.PORT || 4000

/*
//Custom middleware function

app.use((req, res, next) => {
    console.log("I am a Middleware function")
    next() //use it for next process, without it's call nothing can further process
})
*/

// api for contacts (separate route)
app.use('/api/contacts', contactRoute)

// root route "/"
app.get('/', (req, res) =>{
    res.send('hello World');
})

//Listen to browser
app.listen(PORT, () => {
    
    console.log(`Server is running on PORT ${PORT}`)
})

// contacts data
const contacts = [
    {"name": "name1", "email": "email1@mail.com"},
    {"name": "name2", "email": "email2@mail.com"}
]

/*
output 

    [
        {
        "name": "name1",
        "email": "email1@mail.com"
        },
        {
        "name": "name2",
        "email": "email2@mail.com"
        }
    ]
*/
