const Sequelize = require('sequelize');  //importa modulo sequelize
const sequelize = new Sequelize('mydb', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
 /* operatorsAliases: false, */ //WARNING???***
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    
  }
});

exports.mydb = sequelize;
