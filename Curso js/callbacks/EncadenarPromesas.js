const { reject } = require("bluebird");
const { callbackify } = require("util");

function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
}

function segundoCalculo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'Segunda Promesa');
    })
}

calcular().then(segundoCalculo).then(console.log);
///primero se ejcuta la funciona calular que rtorna la p que se resolvio en 40ms y  sobre dicha priemdsa se ejcuta el segundo calculo. cuando la p1 se reseulva 