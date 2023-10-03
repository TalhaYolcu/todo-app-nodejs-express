//console.log("Welcome to TO-DO app");

//import db
const connectDB = require('./db/connect')

//import express and app
const express = require('express');
const app = express();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware - to data be in a json format
app.use(express.static('./public'))
app.use(express.json())

//routes
const tasks = require('./routes/tasks');
app.use('/api/v1/tasks',tasks)

//handle errors
app.use(notFound)
app.use(errorHandlerMiddleware)

//import dotenv get the db url
require('dotenv').config()

//set port
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //use mongo uri and connect to the db
        await connectDB(process.env.MONGO_URI)
        //if connection of db is succesfull, then listen on the server
        //listen the port and handle requests
        app.listen(port,console.log(`server is listening on port ${port}...`));


    } catch (error) {
        //prin the error to the console
        console.log(error)
    }
}

//start the server and connect to the db
start()







