const Sequelize = require('sequelize');

const database = 'kf_database',
    host = 'kf-db.cbhsjq7ql9jn.us-east-2.rds.amazonaws.com',
    username = 'daniel',
    password= 'frostkarki';

const pgClient = new Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres'
});

const descriptions = pgClient.define('Descriptions', {
    id: { type: Sequelize.STRING, primaryKey: true },
    description: { type: Sequelize.STRING }
});

descriptions.sync().then(() => {

});

module.exports = descriptions;