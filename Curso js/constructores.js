//funcion consructora
function Curso(titulo){
    this.titulo2=titulo;
    this.titulo="Curso Profesional";
    this.inscribir= function(usuario){
        console.log(usuario + " se ha inscrito ");
    }
}

let CursoJS= new Curso();
CursoJS.inscribir("chuz");

let CursoRuby = new Curso('Curso de Ruby');