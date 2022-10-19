const express = require('express');
const router = express.Router()

//get route
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: "I am contact get route"
    })
})

/*
    just put GET and press `http://localhost:4000/contacts` in the postman for get data

*/

//post route
router.post('/', (req, res, next) =>{
    res.status(200).json({
        message: "I am contact post route"
    })
})

/*
    just put POST and press `http://localhost:4000/contacts` in the postman for get data

*/

//Dynamic Route
router.get('/:id', (req, res, next) =>{
    const id = req.params.id
    res.json({
        id
    })
})

/*
    just put GET and press `http://localhost:4000/contacts/{any-text}` in the postman for get data

*/

/*
    url: http://localhost:4000/api/contacts/{random strings}

    get random string

    {
        "id": "random string"
    }

*/

//PUT Route
router.put('/:id', (req, res, next) =>{
    const id = req.params.id
    res.json({
        message: "I'm PUT Route"
    })
})

/*
    just put PUT and press `http://localhost:4000/contacts/{any-text}` in the postman for get data

*/

//Delete Route
router.delete('/:id', (req, res, next) =>{
    const id = req.params.id
    res.json({
        message: "I'm Delete Route"
    })
})

/*
    just put DELETE and press `http://localhost:4000/contacts/{any-text}` in the postman for get data

*/

module.exports = router