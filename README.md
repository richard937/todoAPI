# todoAPI

A backend API for todo application.<br>
Tech Stack: NodeJS, PostgreSQL.

It supports following features: 
1. The user can create/read/update/delete todos.
2. The user can search an existing todo by title/date/priority/state
3. The user can prioritize the todos


## Routes:
1. Send a GET request to `localhost:3000/todos` to see all the todos.
2. Send a POST request to `localhost:3000/todos` to CREATE a todo.
3. Send a GET request to `localhost:3000/todos/id/:id` to READ a todo by the ID.
4. Send a PUT request to `localhost:3000/todos/id/:id` to UPDATE a todo (description and priority).
5. Send a PUT request to `localhost:3000/todos/:title/complete` to UPDATE a todo to mark complete by the Title.
6. Send a DELETE request to `localhost:3000/todos/id/:id` to DELETE a todo by the ID.


## DataBase Schema:
The schema for todo looks like this
``` JS
todo {
    id,             // integer, primary key
    title,          // string
    description,    // string
    isCompleted,    // boolean
    priority,       // integer
    date            // date
}

```

## Assumptions:

1. while creating a todo user can provide title, description and priority.
2. Priority is optional, the default priority is 1.
3. date is the date of creation.
4. date is assumed to be the date for todo to be done.
4. Priority increases with the number.
5. Different todos can have same priority.
6. Title of the todo must be unique.


## How to run:

1. Clone the repo and do `npm install` to load the node modules.
2. Should have Postgresql in your system, then create a user, it's password and database.
3. Enter the credentials in `server.js` and `models\toDoItem.js` files. 
4. Uncomment line no 42 in `todoItem.js`. 
5. Hit `node server.js` to run. 
6. Comment line no 42 in `todoItem.js`. 
7. The app will run on `localhost:3000/`
