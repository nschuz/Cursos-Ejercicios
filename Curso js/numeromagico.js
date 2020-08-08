let numero =10;

let numerito;
do{
numerito=prompt();
if(numerito<numero){
    console.log("Ingrese un numero Mayor");
}else{
    console.log("Ingrese un numero Menor");
}

if(numero===numerito) break;

}while(numerito!==numero);