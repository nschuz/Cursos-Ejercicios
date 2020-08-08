const Sequelize = require('sequelize');
const db = new Sequelize('uptasknode', 'root', 'root', {
  host: '127.0.0.1',
  port: '3006', //33065
  dialect: 'mysql',
  freezeTableName: true,
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  //storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
module.exports= db;