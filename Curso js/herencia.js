class Vimeo extends Player {

    //play(){this.video.play();}
    //duration(){return this.video.duration/100;}
    open(){this.redictToVimeo(this.Vimeo);}
}

class Youtube extends Player{
   // play(){this.video.play();}
    //duration(){return this.video.duration/100;}
    open(){this.redictToVimeo(this.Youtube);}
}

//clase padre
class Player {
//funcionalida o metodo compartidos
play(){this.video.play();}
duration(){return this.video.duration/100;}

}

// creamos un objeto
let video = new Youtube();
//igual podemos crear clases que herenden de clase ya del lenguaje

class CustomDate extends Date{}
class Coleeccion extends Array{}

// tmabien se puede hererador de una funcion 
function User(){}
class Admin extends User{}

//sobrescribir 

class User {
    constructor (nombre){
        this.nombre=nombre;
    }
    saludar(){
        console.log("Hola usuario"+ this.nombre);
    }
}

class Admin extends User{
    
    saludar(){
       // console.log("Hola usuario");
       super.saludar; //accedamos al metodo del padre 
       console.log("Aqui es el panel de administrador");
    }
    constructor (nombre){
        super(nombre); //ejecutamos el costructor de la pasre
    }
}

let admin = new Admin();
admin.saludar();

