//la encapsulacion 

class Usuario{
    constructor(nombre){this.nombre=nombre}
    get name (){
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    }
    set name(nombre){
        this.name=nombre;
    }
}
let user = new Usuario("Marcos");
user.nombre="Uriel"; // funciona pero es una mala practica ya que viola la propiedad de la encapsulacion

//metodos accesores y setter y getter
console.log(user.name);
user.name="marcos";