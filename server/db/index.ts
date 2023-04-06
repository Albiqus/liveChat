const Sequelize = require('sequelize')

export const sequelize = new Sequelize('chat', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost'
})

const User = require('./users')(sequelize);

module.exports = {
    sequelize: sequelize,
    user: User
}