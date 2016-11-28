'use strict'

const express = require('express');
const app = express();
const router = require('./routes');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
const root = 'http://localhost:8080'

mongoose.connect('mongodb://localhost:27017/capstone')

const Message = require('./models/message')

app.get('/', ( req, res ) => {
    Message.find((err,messages) => {
        if(err){
            console.log(err)
        } else {
            res.json(messages)
        }
    })
})

app.listen('8080', () => {
    console.log('listening')
})