// fue diseñado para orientada a prototipos

//en un leguaje orientado a prototipos es que las clases no exiten 

//los objetos se crean de otros objetos . los objetos pueden herdear de otros objetos

let user ={nombre: "Chuz"};
typeof user; //object
user.__proto__
//es el objeto principal como habiamos dicho podemos crear objetos a partir de otros objetos 

//objetos basosados en otros
let animal = Object.create(null);

animal.vivo=true;
animal.estaVivo= function(){
    if(this.vivo)
    console.log("Sigue vivo");
}
let perro = Object.create(animal);

//Hreencias de prototipos
perro.estaVivo();
//js busca el metodo dentro del si no esta se  va al protitop padre hasta que lo encuentre  cadena de prototipo cuando , cuando el protipo es null y es undefined 