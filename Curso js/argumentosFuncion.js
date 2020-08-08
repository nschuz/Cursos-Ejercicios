//Argumentos
//Parametros

function cuadrado(numero){ //parametro no tienen tipo en js , no se revisa la cantidad de paramnetos enviados
    return numero * numero;
}

// los arguemntos llenan los parametros 
cuadrado(2); //arguemento
//al no enviar nada es undefined 

//1 verificamos
if (numero== undefined){
    //pedimos el numero
}
//lenmaos un valor al paremetro
//importante Simpre pon los parametros con valor por defaul al final

function sumaTodos(){
    return arguments[0]+ arguments[1];
}
console.log(sumaTodos(1,2,3,4,5,6)); //como pueden ver no eclaramos el paaremtro