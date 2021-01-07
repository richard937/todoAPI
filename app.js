const express = require('express')
const bodyParser = require('body-parser')
const toDoItem = require('./models/toDoItem')
const toDoController = require('./controllers/toDoController')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())


app.get('/', toDoController.welcome)
app.get('/todos', toDoController.getTodos)

// CREATE
app.post('/todos', toDoController.createTodo)

//READ
app.get('/todos/id/:id', toDoController.getTodoByID)

//UPDATE
app.put('/todos/:title/complete', toDoController.markTodoAsComplete)
app.put('/todos/id/:id', toDoController.updateToDo)

//DELETE
app.delete('/todos/id/:id', toDoController.deleteTodo)

// Search by Title
app.get('/todos/:title', toDoController.getTodoByTitle)

// Search by priority
app.get('/todos/priority/:priority', toDoController.getTodosByPriority)
app.get('/todos/top/priority', toDoController.getTopPriorityToDo)

// Search by Date
app.get('/todos/search/date', toDoController.getTodosByDate)

// Search by status
app.get('/todos/search/incomplete', toDoController.getIncompleteTodos)
app.get('/todos/search/complete', toDoController.getCompleteTodos)










module.exports = app