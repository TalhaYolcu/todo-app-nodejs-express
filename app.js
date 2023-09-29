//console.log("Welcome to TO-DO app");

const express = require('express');

const app = express();


//middleware - to data be in a json format
app.use(express.json())

//routes
const tasks = require('./routes/tasks');
app.use('/api/v1/tasks',tasks)



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

//listen the port and handle requests
app.listen(port,console.log(`server is listening on port ${port}...`));