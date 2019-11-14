const S = require('sequelize');

const sequelize = new S('test197', 'root', 'Abcd1234', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: '3306',
  logging: false
});

const User = sequelize.define('user', require('./models/user'));
const Pet = sequelize.define('pet', require('./models/pet'));

sequelize.sync().then(() => console.log('synced'));
