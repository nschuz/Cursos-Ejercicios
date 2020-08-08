const Sequilze = require ('sequelize');
const db = require('../config/db');

//le damos un nombre al modelo y definimos la estructura de l ab ase de datos 
const Proyectos = db.define('proyectos',{
    id: {
        type: Sequilze.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre:   Sequilze.STRING,
    url: Sequilze.STRING
});
module.exports =Proyectos;