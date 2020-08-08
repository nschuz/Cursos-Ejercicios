//Una promesa representa un valor que existira  puede ser el resultado o un posible error. 

const request= requiere('request');

function leer (url){
    return new Promise(function(resolve , reject){

       request(url, function(err, response){

        if(err){
            reject(err);
        }else{
            resolve(response);
        }
       });

    });
}
//recordamos paar ejecutar una promesa se ejcuta el contructor promise  con una fuinconn 


//function asincrono (){
   
    //el contructor promise permite geenrar promesas nuevas . esta retornando esta proemsa 
    //la funcion dento del constructor de promise se le llama executor. recibe dos arguemntos resolve y reject . estas funciones tiene  la habilidad de resolver o recharazar una promesa
//}
leer('http://codigofacilito.com').then(function(response){
console.log(response);
}).catch(function(err){
console.log(err);
});