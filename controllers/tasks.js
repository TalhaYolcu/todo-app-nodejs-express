//import the Task model
const Task = require('../models/Task')




//get All tasks 
const getAllTasks = (req,res) => {
    res.send('get All tasks')
}
//create a task with properties name and isCompleted
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

//get a task with id
const getTask = (req,res) => {
    res.json({id:req.params.id})
}

//update a task with id
const updateTask = (req,res) => {
    res.send('update task')
}

//delete a task with id
const deleteTask = (req,res) => {
    res.send('delete task')
}

//export the functions so that they can be used in routes
module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}