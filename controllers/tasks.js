//import the Task model
const Task = require('../models/Task')

//use asyncwrapper
const asyncWrapper = require('../middleware/async')

//use customAPIError
const {createCustomError} = require('../errors/custom-error')

//get All tasks 
const getAllTasks = asyncWrapper(async (req,res) => {
    //get all the tasks from database
    const tasks = await Task.find({})
    res.status(200).json({tasks})

})
//create a task with properties name and isCompleted
const createTask = asyncWrapper(async (req,res) => {
    //create task comes from request
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

//get a task with id
const getTask = asyncWrapper(async (req, res,next) => {
    //get a spesific task with an id
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id:${taskID}`,404))
    }  
    res.status(200).json({ task })      
})

//update a task with id
const updateTask = asyncWrapper(async(req,res) => {
    //update the ask comes from the request
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{
        new:true,
        runValidators:true,
    })
    if (!task) {
        return next(createCustomError(`No task with id:${taskID}`,404))
    }  
    res.status(200).json({task})
})

//delete a task with id
const deleteTask = asyncWrapper(async (req,res) => {
    //delete the task
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id:${taskID}`,404))
    }  
    res.status(200).json({ task })  
})

const editTask = asyncWrapper(async(req,res) => {
    //edit the ask comes from the request
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{
        new:true,
        runValidators:true,
        overwrite : true,
    })
    if (!task) {
        return next(createCustomError(`No task with id:${taskID}`,404))
    }  
    res.status(200).json({task})
})

//export the functions so that they can be used in routes
module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask,editTask}