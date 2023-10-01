//console.log("Welcome to TO-DO app");

//import db
const connectDB = require('./db/connect')

//import express and app
const express = require('express');
const app = express();


//middleware - to data be in a json format
app.use(express.json())

//routes
const tasks = require('./routes/tasks');
app.use('/api/v1/tasks',tasks)

//import dotenv get the db url
require('dotenv').config()

//welcoming screen
app.get('/hello',(req,res)=> {
    res.send('TO-DO app')
})

/*
//get all the tasks
app.get('/api/v1/tasks',(req,res))

//create new task
app.post('/api/v1/tasks')

//get single task
app.get('/api/v1/tasks/:id')

//update task
app.patch('/api/v1/tasks/:id')

//delete task
app.delete('/api/v1/tasks/:id')
*/
//set port
const port = 3000;

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







