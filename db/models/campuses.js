const Sequelize = require('sequelize')
const db = require('../index')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING
    }
})

module.exports = Campus