let numero = [2,3,5];

function sumar (n1,n2,n3){
    return n1+n2+n3;
}
//podemos usar apply 
let resultados= sumar.apply(this.numeros);


//una forma mas moderna 
let resultados = suamr (...numeros);
console.log(rsulatdos);

//[2,3,4]=> 2,3,4

let otroArreglo=['hola','mundo'];

console.log(...numero , ...otroArreglo);
 