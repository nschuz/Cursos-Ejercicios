// exportamoes expres
const express = require ('express');
const router = express.Router();


//importamos el controlador 
const proyectoContoller = require('../controllers/proyectoController');

module.exports = function(){

    //ruta para el home esto es es parte del middlware -> ruta home 
router.get('/', proyectoContoller.proyectoHome);
router.get('/nuevo-proyecto', proyectoContoller.formularioProyecto);
router.post('/nuevo-proyecto', proyectoContoller.nuevoProyecto);

/*
router.get ('/nosotros', (req, res)=>{
    res.render('nosotros');
});*/
return router; // para hacerlo disponible en el otro archivo 

}

