//get mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator');

//create schema
const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 5
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: (v) =>{
                return valid.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    }
})

//create database model 
const contactModel = mongoose.model('contactModel', contactSchema)

//module export
module.exports = contactModel