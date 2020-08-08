const { resolve } = require("bluebird");

let p1= new Promise((resolve)=>setTimeout(resolve,500,'Hola Mundo'));
let p2= new Promise((resolve)=>setTimeout(resolve,600,'Hola Mundo'));

let p3= Promise.reject();

let saluda = ()=>console.log('Hola chuz primeor ejecuta p1 y p2');
//p1.then(console.log);

p1.then(function(){
    p2.then(function(){
        saluda();
    })
})
//mismo patton del calback help con funciones dentro de ellas


Promise.all([p1,p2,p3]).then(resultados=>{
   console.log(resultados);
    saluda();
}).catch(()=>console.log('Falle :C'));
// falra si al algunas falla