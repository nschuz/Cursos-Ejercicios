//sintaxis alternativas a objetos 
class Curso {

    constructor(titulo){
        this.titulo=titulo;
    }

    inscribir(usuario){
        console.log(usuario+" se ha inscrirto");
    }
    
    
}
// lo mismo
let cursos = class{}

let JavaScript = new Curso("curso js");
JavaScript.titulo;
JavaScript.inscribir("chuz");


