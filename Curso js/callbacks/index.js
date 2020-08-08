
//instalamo la liberia request
//require es de una liberia 
//
const request = require('request');
//queremos hacer una peticion y el segundo a rgiemnto es un callback es solo una funcion 
//cuadno termine la peticion se debe dejar un mensaje en la cola de mensajes
//event blue lee el emnsaje 
request('http://google.com' , function(){
    console.log("Termine la peticion de google");
});

console.log("Yo voy depues en el codigo de la peticion de google  ");
// el programa sigue ejecutando la slienas primera 

//PROMESAS
//los clalback tiene defectos cuando tenemos que esperar varias acciones asincronas antes de pasar a nuestras tareas 

//CallBackhelp
//Las promesas son una mejora del uso de calbacks 

//instalamos las depencdeicnas
//npm install request-promise

const rp = require('request-promise');

rp('http://google.com').then(function(html){

console.log("Termine la peticion de google");
}).catch(function(err){
    console.log(err);
});
// las dfreicnas de usar promesas
//no usamos una funion como argumento 
//el resultado de jecuracion rp estamos llamando un rp entonces es objeto del tipo promise
//el objeto de la promesa tiene un metodo then que se ejecuta si la funcion se cumplo
//un metodo cath si la promesa 
//ironicamnte las promesas usan callbacks cuando obteenmos la operacion asincrona
//los estados fullfied proemsa con exito 
//reject no se cumplio con exitso
//pending la priomesa no cumplio no h aterminado
//setled finalizada cuando termino ya sea con exito o con algun error