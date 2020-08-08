let arreglo= [1,2,3,5,3,53,13,2,1];

for (let index = 0; index < arreglo.length; index++) {
     let elemento= arreglo[index];
    
}

let arreglo =['java', 'ruby', 'phyton'];
arreglo.forEach(function(elemdnto){
console.log(elemento);
});

//Eliminar java
arreglo=arreglo.filter((el)=>el!='ruby');

//BUscar
let el= arreglo.find(el=>el=='ruby');
console.log(el);

let numero =[1,2,3,4,5];
let cuadrados= numero.map(numero=>numero*numero);
console.log(cuadrado);
numero=numero.map(numero=>parseInt(numero));
