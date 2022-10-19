// get express framework
const express = require('express');
const app = express();
//set PORT
const PORT = 3500
app.listen(PORT)
/* 
    //listen PORT in browser
    // set PORT 
    const PORT = process.env.PORT || 3000

    app.listen(PORT, ()=>{
     console.log(`server listening at ${PORT}`)
})
*/

// for get request, send response
app.get('/', (req, res) => {
    res.send (`Hello World`)
})

// for post request
app.get('/posts', (req, res) => {
    res.send ('I am post page')
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