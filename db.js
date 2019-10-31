const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => console.log('Connected to the Database'))
    .catch(err => console.log(err));

module.exports = sequelize;