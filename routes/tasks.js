const express = require('express');

const router = express.Router();

//export the task functions in the controllers
const {getAllTasks,createTask,updateTask,deleteTask,getTask,editTask} = require('../controllers/tasks')

//if get and post requests received
router.route('/').get(getAllTasks).post(createTask)

//if get , patch and delete requests received with an id
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

//export routes so that they can be used in app
module.exports = router