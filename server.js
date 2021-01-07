const app = require('./app')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'tododata',  //database
    'postgres',  //username
    '',     //password
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

sequelize.authenticate()
    .then(log => console.log('Postgres DB Connection Successful'))
    .catch('DB Connection Not Successful')

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Running on port', port)
})