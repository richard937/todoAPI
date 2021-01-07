const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'tododata',  //database
    'postgres',  //username
    '',         //password
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

const toDoItem = sequelize.define('toDoItem', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    priority: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: new Date(Date.now()),
    }
})

//toDoItem.sync({ force: true })
module.exports = toDoItem