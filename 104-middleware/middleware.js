const express = require('express')
const app = express()
//3rd party middleware
const morgan = require('morgan')
//3rd party body parser
const bodyParser = require('body-parser')

// contact Router
const contactRoute = require('./api/routes/contact')

const PORT = 7500
app.listen(PORT)

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

