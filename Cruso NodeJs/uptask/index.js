//import express from 'express'; es lo mismo esta liena con la de bajo
const express = require ('express'); //importamos express
const { request } = require('express');
const routes = require('./routes');
const path = require('path'); // una liberia propia de node 
const bodyParser= require('body-parser');//liberia para leer datos de formularios 

//creamos ocnexion a la base de datos 
const db =  require ('./config/db');

db.authenticate ()
    .then(()=>console.log('Conectando al servidor')).catch((error)=>console.log(error));


//crera una pp de express
const app = express();
//Donde cargar los archios estaticos
app.use(express.static('public'));

//habilitamos pug 
app.set('view engine', 'pug');

//añiadir la carpetas de la vistas 
app.set('views', path.join(__dirname, './views'));

//habilitar bodyParser para leer datos de formularios 
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());


app.listen(3000); //el puero escuchado 