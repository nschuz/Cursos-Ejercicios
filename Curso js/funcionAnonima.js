//las funciones 
function execute(funcion){
    funcion();
}
function hola() {
    console.log("hola");
}
execute(hola());

//la forma mas comun 
// es una funcion anonima
execute(function () {
   console.log("Hola"); 
});