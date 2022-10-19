/*
//Custom middleware function

app.use((req, res, next) => {
    console.log("I am a Middleware function")
    next() //use it for next process, without it's call nothing can further process
})
*/

//get express
const express = require('express')
//put express in a variable
const app = express()
//set PORT
const PORT = 3500

//listen PORT in browser
/* 
    app.listen(PORT, ()=>{
     console.log(`server listening at ${PORT}`)
})
*/
app.listen(PORT)

//send response
app.get('/', (req, res) =>{
    res.send('Home Page')
})

// let's make a contacts list and send this data as response
//first make some contact data
const contact = [
    {
        name: "Mahmudul Hasan",
        age: '28',
        'current marital status': 'not married',
        'occupation': 'web developer'
    },
    {
        name: "Kazi Sakib",
        age: '26',
        'current marital status': 'not married',
        'occupation': 'Shop Business'
    },

]

// then send those data when user request in contacts routes
app.get('/contact', (req, res) =>{
    res.json(contact)
})

// then we will get data in browser

//we can use post method to get data, for this we need to use postman tool to get the data

app.post('/post', (req, res) =>{
    res.send('I am postman')
})