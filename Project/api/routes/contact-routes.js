// Here we put all routes about contact API
// express 
const express = require('express');
// router
const router = express.Router();
//shortcut: const express = require('express').Router();

// Get Route
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: "Hello, I'm all contacts Get Route "
    })
})

// Post Route
router.post('/', (req, res, next) =>{

        //use body parser
        const name = req.body.name
        const email = req.body.email
    
        res.status(200).json({
            message: "Hello I use body parser and POST method",
            name,
            email
        })
        
    // res.status(200).json({
    //     message: "Hello, I'm all contacts POST Route"
    // })
})

//Dynamic Route
router.get('/:id', (req, res, next) =>{
    const id = req.params.id
    res.json({
        id
    })
})

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

//Delete Route
router.delete('/:id', (req, res, next) =>{
    const id = req.params.id
    res.json({
        message: "I'm Delete Route"
    })
})


module.exports = router

