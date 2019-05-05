const Sequelize = require('sequelize');  //importa modulo sequelize
const persistent= require('../persistent/sequelize.js')

let definition = {


	idpicture: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		},
 

	class: {
 		type: Sequelize.STRING,
		},
 

	height: {
		type: Sequelize.INTEGER,
		},


	colour: {
		type: Sequelize.STRING,
		},


	country: {
		type: Sequelize.STRING,
		},


	


	relink: {
		type: Sequelize.STRING,
		notNull: true,   
	},

  
	name: {
		type: Sequelize.STRING,
		}
};

let props = {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
};

module.exports=persistent.mydb.define('picture', definition , props);



