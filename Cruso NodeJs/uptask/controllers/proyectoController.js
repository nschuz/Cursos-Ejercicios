// esxpor es similar a module controller

exports.proyectoHome=(req , res)=>{

    //hacemos una respueta del servidor 
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
// rnder si imprime o manda html
}

//exports esportamos multples partes de codifo 
//moude export solo esxpotars una sola 

exports.formularioProyecto =(req, res)=>{
    res.render('nuevoProyecto',{
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto  =(req, res)=> {
    //Eviar a la cosola lo que el usuario escriba 
    //console.log(req.body)

    //validar que tengamos algo en el input
    const {nombre} = req.body; //ontenemos su onbre y el valor 

    let errores= [];
    if (!nombre){
        errores.push({'texto':'Agrega un nombre al proyecto'});
    }
    //si hay errores
    if(errores.length>0){
        res.render('nuevoProyecto',{
            nombrePagina: 'Nuevo Proyecto',
            errores
        });
    }else{
        //no hay errores 
        //insertar en bd 
        
    }
}