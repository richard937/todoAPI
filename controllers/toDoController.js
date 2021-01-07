const ToDoItem = require('../models/toDoItem')
const { Op } = require('sequelize')

exports.welcome = (req, res) => {
    res.send("Welcome to ToDo API");
}

exports.getTodos = async (req, res) => {
    try {
        const toDos = await ToDoItem.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        res.status(200).json({
            status: 'success',
            data: toDos
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to generate todos'
        })
    }
}

// CREATE todo
exports.createTodo = async (req, res) => {
    try {
        const {
            title,
            description,
            priority
        } = req.body

        const toDo = await ToDoItem.create({
            title,
            description,
            priority
        })

        res.status(200).json({
            status: 'success',
            data: toDo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to create todo'
        })
    }
}

//READ todo
exports.getTodoByID = async (req, res) => {
    try {
        const { id } = req.params
        const toDo = await ToDoItem.findOne({
            where: {
                id: id
            },
        })
        res.status(200).json({
            status: 'success',
            data: toDo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'fail'
        })
    }
}

// UPDATE todo
// mark as complete
exports.markTodoAsComplete = async (req, res) => {
    try {
        const { title } = req.params
        const toDo = await ToDoItem.update({
            isCompleted: true
        }, {
            where: {
                title
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to update'
        })
    }
}

// UPDATE description and priority
exports.updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, priority } = req.body;

        const toDo = await ToDoItem.update({
            description: description,
            priority: priority
        }, {
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to update'
        })
    }
}

//DELETE todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const toDo = await ToDoItem.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to delete'
        })
    }
}

// Search by Title
exports.getTodoByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const toDo = await ToDoItem.findOne({
            where: {
                title: title
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to get todo'
        })
    }
}

// Search by priority no
exports.getTodosByPriority = async (req, res) => {
    try {
        const { priority } = req.params
        const toDosRes = await ToDoItem.findAll({
            where: {
                priority: priority
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDosRes
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to get todo'
        })
    }
}

// Search top priority todo
exports.getTopPriorityToDo = async (req, res) => {
    try {
        const toDosRes = await ToDoItem.findOne({
            order: [
                ['priority', 'DESC'],
            ],
        })
        res.status(200).json({
            status: 'success',
            data: toDosRes
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to get todo'
        })
    }
}

// Search todo by Date range
exports.getTodosByDate = async (req, res) => {
    try {
        const { startDate, endDate } = req.body

        const toDosRes = await ToDoItem.findAll({
            where: {
                date: {
                    [Op.between]: [startDate, endDate],
                }
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDosRes
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to get todo'
        })
    }
}

// Search by status
exports.getIncompleteTodos = async (req, res) => {
    try {
        const toDosRes = await ToDoItem.findAll({
            where: {
                isCompleted: false
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDosRes
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to get todo'
        })
    }
}

exports.getCompleteTodos = async (req, res) => {
    try {
        const toDosRes = await ToDoItem.findAll({
            where: {
                isCompleted: true
            }
        })
        res.status(200).json({
            status: 'success',
            data: toDosRes
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'failed to get todo'
        })
    }
}