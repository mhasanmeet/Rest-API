const express = require('express');
const router = express.Router()
const Contact = require('../models/contact')

//make virtual database array
const contacts = []

//get route
router.get('/', (req, res, next) =>{
    res.status(200).json({
        contacts
    })
})


router.post('/', (req, res,next)=>{
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })

    contact.save()
            .then(data =>{
                res.json({
                    message: 'contact added',
                    contact: data
                })
            })
            .catch(err => console.log(err))
})

//post route
/*
router.post('/', (req, res, next) =>{

    const name = req.body.name
    const email = req.body.email
    console.log(name, email)

    res.status(200).json({
        message: "<h1>hello</h1>",
        name,
        email
    })
})
*/

// save data in virtual database
router.post('/', (req, res, next) =>{

    //push data into array
    contacts.push({
        name: req.body.name,
        email: req.body.email
    })

    res.status(200).json({
        message: "Data saved"
    })
})

/*

output:

{
    "contacts": [
        {
            "name": "Kazi Sakib",
            "email": "sakib@gmail.com"
        },
        {
            "name": "Mahmudul Hasan",
            "email": "mahmudul@gmail.com"
        }
    ]
}

*/

module.exports = router

