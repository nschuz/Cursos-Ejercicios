//this 
//el contexto es uy flexible 
console.log(this); // el contexto en el scope global

//this = obejto globakl

//thsi en scope local
function hola() {
    console.log(this);
}
hola(); // obteenmos el mismo objeto (objetc window)


//ahoa dentro de un objeto
let obejto ={
    demo:function () {
        console.log(this);
    }
}
obejto.demo(); //la palbra nosr referimos el objeto qiu posee el codifodo que estamos ejecutando


let executor ={
   funcio:null,
    execute:function (f) {
        this.funcio;
        this.funcio();
    }
}
//MUy importante cuando una funcion se ejecuta el valor de this es aquel del objeto que invoco la funcion 
//el contexto es a quel manda llamar la funcion 