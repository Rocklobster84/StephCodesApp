import 'dotenv/config';
const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: RDS_HOST,
  dialect: RDS_USER,
  port: RDS_PORT, // Default PostgreSQL port
  logging: false, // Disable logging; default: console.log
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;