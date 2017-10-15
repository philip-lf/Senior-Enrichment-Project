const Sequelize = require('sequelize')
const db = require('../index')

const Student = db.define('student', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = Student