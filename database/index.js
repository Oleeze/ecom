var Sequelize = require('sequelize');
var sequelize = new Sequelize('ecom', 'Oleg', 'Password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
 
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
})

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.items = require('./model/item.js')(sequelize, Sequelize);
db.homePage = require('./model/homePage.js')(sequelize, Sequelize);
 
module.exports = db;