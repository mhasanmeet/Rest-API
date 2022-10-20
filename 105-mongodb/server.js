const express = require('express')
const app = express()
//3rd party middleware
const morgan = require('morgan')
//3rd party body parser
const bodyParser = require('body-parser')
//get mongoose
const mongoose = require('mongoose')
//get .env for security purpose
const dotenv = require('dotenv').config()

//port listen to browser
const PORT = 7500
app.listen(PORT)

//connecting mongodb atlas database
mongoose.connect(process.env.MONGODB_URI, { //secure link with dotenv variable
            useNewUrlParser: true
        }).then(() => {
            console.log('Database connected')
        }).catch(err =>{
            console.log('Database is not connected')
        });

// contact Router
const contactRoute = require('./api/routes/contact')

//use morgan
app.use(morgan('dev'))

//use body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


/*
//middleware function

app.use((req, res, next) => {
    res.send("text or anything")
    next() //use it for next process, without it's call nothing can further process
})
*/

app.use('/contact', contactRoute)

app.use('/', (req, res, next) => {
    res.send('I am a middleware')
    next()
})



