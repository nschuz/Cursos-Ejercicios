//JSON
let Curso={
    titullo:'Curso Profesional de js',
    duracion: 2.2,
    bloque: ['introduccion', 'funciones'],
    inscribir: function(usuario){
        console.log(usuario + " ahaora esta inscrito"); // es un metodo
    }
}

Curso.titullo="curso de js";
console.log(curso.titullo);
curso['inscribir']=function(){

};
curso.inscribir('chuz');