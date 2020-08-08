const { promises } = require("fs");
const { resolve } = require("bluebird");


//que sea async que retorne una promesa
async function calcular(){
    return Promise ((resolve,reject)=>{
        setTimeout(resolve,400,5);
    });
}

//la otra psoibilida que sea funa fnciona y la volvimos asincrona con async  lo que hace que async que retorna una pri¿oemsa con el resultado 
async function suma (valor1, valor2){
    return valor +valor;
}//simpre retona una proemsa 


//la palabra reservada await jace que la ejecuacion que la promesa sea resuelta evitando the o creando funciones anonimas 

(async function(){
    let promesa =await  new Promise((reslve,reject)=>{
        setTimeout(resolve,400,5)
        });

        let valorDos =await  new Promise((reslve,reject)=>{
            setTimeout(resolve,400,10)
            });

        console.log(promesa+ valorDos);
    })();

    //await evita usar then o funciones asyncronas 


async function showGithubInfo(){
  let response=await  fetch('https://api.github.com/user/chuz/Respos');
  let respos= await response.json();
console.log(respos);
}

showGithubInfo();