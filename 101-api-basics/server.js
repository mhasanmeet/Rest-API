// get express framework
const express = require('express');

const app = express();

// set PORT 
const PORT = process.env.PORT || 3000

// for get request
app.get('/', (req, res) => {
    res.send (`Hello World`)
})

// for post request
app.get('/posts', (req, res) => {
    res.send ('I am post page')
})

//Listen to browser
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})