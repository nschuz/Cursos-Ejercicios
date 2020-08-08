import { userInfo } from "os";
import { parse } from "querystring";

let numero=4;

let respuesta=true;
//const PI= 3.14;
let palabra2= "hola mundo 2";

let a=5;
let b=2;
let palabra2= "hola mundo 2";
console.log("hola"+palabra2);
console.log(numero + palabra2);


let cadena= "hola mundo";
console.log(cadena.length);
console.log(cadena.toUpperCase());
console.log(cadena.toLocaleLowerCase());
console.log(cadena.indexOf("hola")); // nos dice la primera considencia regresaria un cero por h  
//replace  busca el valor  y remplza
console.log(cadena.replace('mundo', 'youtube'));

console.log(cadena.substring(0,4));

//slice funciona igual que subestring pero permite valores negaticos 
console.log(cadena.slice(-3)); // los tres ultimos caracteres
console.log(cadena.slice(0,-6)); // devulve hola , ignora los ultimos 6 
console.log(cadena.slice(2)); // la mundo 

// trim  elimina ls espacios al inicio y al final de la cadena 
 let cadena3 = "       hola youtube estamos trabajado con cadena      ";
 console.log(cadena3);
 console.log(cadena3.trim());

 // metodos solo econ ecma 6///
 //startWith true o false
 console.log(cadena.startsWith("h"));
 console.log(cadena.startsWith("m",5));

 // edswith
 console.log(cadena.endssWith("a",4));
 console.log(cadena.endssWith("n",8));
 console.log(cadena.endssWith("mundo"));

 // include es lo mismo que indexof pero booleano
 console.log(cadena.includes('n'));
 console.log(cadena.includes('a',5));

 cadena3="HOLA";
 console.log(cadena3.repeat(3)+" ");
 console.log('r'.repeat(3));

 // templates Strings//
let nombre ="juan";
let apellido= 'gomez';
let edad= 20;
console.log(`Hola ${nombre} ${apellido}. tines ${edad} años.`);

/// Nuevo Vdieo el objeto MATH
Math.E - Math.PI;
Math.abs();
Math.ceil() // devuelve un enetro mas pequeño mayor o igual que un numero 
redonde hacia abajo 
Math.floor(); redodnea hacia arriba 
Math.pow(x,y)  // dos paarametros;
Math.random() Genera un numero aleatorio entre 0 y 1
Math.round()  redonde al numero mas cerca 
Math.sign(x) devuelve el signo 


// un objeo estatico usar  su nombre para utilizarlo 

console.log(Math.E);
let num=5;
console.log(Math.abs(num));
Math.random()*100 // entre 0 y 100
console.log(Math.round(Math.random()*100)); // numero alatroio entre o a 100 sin decimales
conle.log(Math.random*(max- min)+min); // formula 

// condicionale ssimple compuebra una cosa
 compues  compurban una cosa y su cosa contario 
 condicional multiples varios casos 

condicional SIMPLE 
if(condicion){

}
CONDION COMPUESTA
if (condicion){

}else{

}

if(num> 0  && num<2){
    entra si cumplen las dos condiciones
}

if ( nume>0 || nume<2){
    si una cumple entra a la condicion 
}


// ordenar tres numero de mayor a  menor 
const number=document.getElemntById('numbers'); // para el html 
const result= documen.getElemntById('result');
let a= prompt('introduca el primer numero');
let b= prompt('introduca el segundo numero');
let c= prompt('introduca el tercer numero');
number.textContent = `Los numeros sosn ${a} , ${b} , ${c} `;

if ( a>b  && a>c){
    if (b>c){
        console.log( a, b, c);
    }else{
        console.log( a, c, b);
    }
}else if ( b>a  && b>c){
    if (a>c){
        console.log( b, a, c);
        result.textContent=``
    }else{
        console.log( b, c, a);
    }
}else if ( c>a  && c>b){
    if (a>b){
        console.log( c,a,b);
    }else{
        console.log( c,b, a);
    }
}

// ararys se pueden mezlar tipos de datsos pero no es recomendable 
// un arary se declara ente corchetes
// vacios o con contenido ya establecido
los arreglos se comportancomo listas
let arary=[];
let numero =[1,2,3,4,5];
let numeros=[];
console.log(numeros);
console.log(numero[0]);
let palabras=['hola' , 'estamos' , 'en', 'youtube'];
console.log(palabras[1].length);
console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);

/// Metodos para arreglos 
// Verificar el tamaño del arreglo
numero.length;
// verificar si es un array true o false
Array.isArray(number);
// Eliminar un elemento 
//.shift(); Elimina el primer elemento del array
//.pop();  Elimina el ultimo elemento del array 

// Añadir elemntos 
.push (elemnt1 , element2, ..) 
// Añade uno o mas elementos al  final del arry y deveuleve la nueva longitud
// .unshift (element1 , element2 , element3) añade un elemento al inicio del arreglo y devuelve su longitud



// buscara elementos 
.indexOf() devuelve el primer indice del elemento que coincida con ele valor especificado 
o -1 si ninguno es econttado

lastIndexOf () ele ultimos indice enecontrado 
Notas ojo devuelve la posicion 

let arreglo = {1,2,3,4,5};
console.log(arreglo.lastIndexOf(4));
// devuelve 3 

// reverse  invierte el orden los arreglos 
arreglo.reverse ();

// // join  Devuelve un string con ele separadpr que indiquemps , por defecto son comas

// splices (a,b, items) . cambia de un array eliminado elementos existentes y /0 agregando nueveos elementos 

//a - Indice de iniicio 
//b- Numero de elemntos (opcional)
// items - elementos a añadir en el caso que se añadan (opcional)

console.log(numbres);
numbers.splices(3,)

let number =[1,2,3,4,5,6];
console.log(number);
console.log(number.join("XD"));
let String2 = number.join(" * ");
console.log(String2);
//number.splice(3);// elimina desde la poscion tres hasta la fina
//number.splice(2,2); // elimina desde la posicon 2 hasta 2  posiones adelante 
//number.slice(2,2,10) ;

//console.log(number);

let newNumbers = number.slice(2);
console.log(newNumbers);
console.log(number);


 /// BUCLES ////
 Bucle {

}

 while ( hasta condicion sea false ){

}
 do {

 }while ();

 // bucle for 
 for (let i=0 ; i<10; i++){

 }

 //Bucle for of y bucle for in 
 simplifica al bucle for 
 let names=['paco','chuz', 'juna' , 'pedro'];
 for (let name  of names){
     console.log(name);
 }

 for (let name in names){
     console.log(name);
     // imprime 0 , 1 ,2 ,3 un for in imprime el indice la posicion se usa para a objetos no para arreglos 
 }

objetos  en js 
son esctructuras que reperesentan propiedades  , valores y acciiones que pueden realizar un objeto.

const computer = {
    screensize : 20,
    brand :"apple"
}
const table = {
    material : "wood" , 
    sizee : 20;
}
Para acceder a las propiedades y acciones del objeto se utiliza la nomenclatura de puto 


const person= {
    name: "juan",
    age: 26,
    son: ["LAURA" , "DIEGO"]
}
console.log(person.name);
console.log(person.age);
console.log(person.son[0]);
console.log(person.son[1]):
//Para poder recorrer todods los atributos 

for (const key in person){
    console.log(key); 
} // imprime los atributos 

for (const key in person){
    console.log(person[key]);
} // imprimimos los valores que contiene cada atributos


for ( const son  in person.son){
    console.log(son);
}// estamos imprimiendo del array

for (const son of person.son){
    console.log(son);
} // imprimimos  los datos del atrinuto

console (`Hola ${person.name}. tiens ${person.age} años y tus hijos se llaman ${person.son.join(",")}`);


Progrmacion orientada a objetos es un paradigma de la aprogramacion que actualiza la forma de programar anterior 

Algunos coneceptos fundamnetales son:
*clase , herencia , objeto , metodo , evento , etc 


Cunado un objeto tiene la misma estructura como tener dos personas con los mis atributos . podemos hacer uso de una clase ya que es una plantilla 

cundo creamos un objeto se le llama instaciar un objeto 

la clase necesitan una funciona constructor . se tiene que llamr constructor y se ejecuta cada vez que creamos un objeto 


class Persona {
    constructor = (nombre , apeliido , edad){
        this.nombre= nombre
        this.apellido= apellido
        this.edad=edad
    }
}

cuando hacemos this hacemos refencia al objetoo que estamos usando 
nombre del objeto = nombre del parametro
apellido del objeto = apellido del parametro  


Los objetos ppueden teenr funciones asociadas a el. En ese caso se le denomina metodos 

saludar (){
    return `hola tengo ${años}`
}

Parace crear un objeto utilizado o plantilla se hace con la plabra reservada new y el nombre de la clase que queremos utilizar 

const jua = new Persona("juan" , "grecia" , 23);

Una vez instaciado el objeto podemos acceder a sus porpiedades 
juan.nombre      juan["nombe"]
juan.apellido
jua.edad
juan.datos
juan.saludar()   juan["saludar"]()


///spread operator expandir el contenido de un array 
// su sintaxis es ...

const number =[ -2 , 23,3,2,3,1,-2];
console.log(...number);
console.log(numbers...);

// elemntos en un array a un funcion 

const addNumbe = (a,b,c) =>
{
  console.log(a+b+c);  
}
let numberstoadd =[1,2,3];

addNumber(..numbertoadd);
// le pasamos un array 
addNumber(1,2,3);

////////////////////////////////
let uses = ['javuer' , 'jaime', 'juan'];
let newUsers =[ 'marta' , 'jaime ' , ' laura'];
uses.push(...newUsers)
user.unshift(...newUsers)
console.log(users);


/// Como copiar arrays 
let arrelgo1 = [1,2,3,4,5];
let arreglo2 = [...arr1];
// el contenido de un arargelo le expandemos 
console.log(arreglo2);

// concatenea arrays 
let arr1= [1,2,3,4,5,6];
let arr2 = [6,7,8]

let arrconcat = arr1.concat(arr20);
let arrconcat = [...arrr1,...arr2];

//// enviar un numero de argumentos a una funcion (pametros REST) // no conocemos el numero de parametros que necesiro y sabemos que se van a conevertir en un array 
 
const restParametros = (...numbers){
    console.log(numbers);
}
restParametros(1,2,3,4,4,5,6,6,7);


// libreria math 
console.log (Math.max(1,2,3));
console.log(Math.max(...arreglo));

// Como eliminar elementos duplicados de un array 
console.log(new Set(numbers));
// un objeto de que no tienene elemntos duplicados 

console.log([...new Set(numbers)]); un array sin elemntos repetidos.


// DOM  DOCUEMNT ORBJECT MODEL
ES TOTA LA ESTRUCTURA HTML DEL DOCUEMNTO 
NO es js e, es una API (Aplication programming interface)

Elemt node = cualquier eqtieuta html (1)
text node =  (3) contenido de eqtiqueta
comment node = (8) cualquier comentario html 

en la consola  dolar cero solo funciona en el navegador 

$0.id
$0.textContent
&0.nodetype
$0.nodeName // siempre usar mayuscilas cundo trabajamos con el dom 

Mat.min(1,2,23,23,4,212,34,); // Regres aun numero minimo 

Math.max(1223,23,34,2,13,2,3,3,,2,2,3,); // regresa  el numero mayor 

// ECMA 6 Tiene un tipode  datos simbol
let valor = Symbol("Simbolo");

console.log(typeof valor) // regresa el tipo de dato  numero , sybmol , en caso de los arreglos regresaria un object


//  arreglo 
valor = [1,2,3,4,4];
// obejto 
valor = {
    nombre: 'Juan'
    profesion: 'Desarrolladoor web'
}

// fecha 
valor = new Date();

//Entonces existen dos  tipos de datos primitivos y de referencia ( obejetos )  como date , arreglos , objetos 


// Convertir un String a Numero 
  1 forma
  Number(numeoro1)
  2 forma 
  parseInt(numero1)
  parseFloat("10.33"): 


dato=Number(true) // da 1
dato=Number(falso) // da 0
datos = 1021398.12232413
datos.toFixed(3) // me regresa el nuemro con tres deicmaels 
datos.toFixed() // me regresa el dato sin decimales 

// Convertir un numero a String 
.length // solo es un metodo para stings 
para tranformar un numero a string
1 forma
String(CodigoPostal)

let dato = True;
String(dato)
console.log(dato) // true
console.log(dato.length) // 4
console.log(typeof dato) //String  

2 forma 
datos = dato.toString();
////
Template literal   Forma Vieja 

const producto1 ="pizza",
producto2="hamburguesa",
precio1=30,precio2=40;
Version antigual 
let html;
html '<ul>'+
'<li>Oirden'+ producto1 + '</li>'+
'<li>Precio'+ precio1 + '</li>'+
'<li>Oirden'+ producto2 + '</li>'+
'<li>Precio'+ precio1 + '</li>'+
'</ul>'
// para enicralo an doom del html 
document.getElementById("app").innerHTML=html

Template literal Nueva Version 
html= `
<ul>
 <li>Orden: ${producto1} </li>
 <li>Precio: ${precio} </li>
 <li>Orden: ${producto2} </li>
 <li>Precio: ${precio2} </li>
 <li>Total: ${total (precio1 , precio2)} </li>
</ul>

fuction  total (precio1 , precio2 ){
    return precio1 + precio2;
}

`
document.getElementById("app").innerHTML=html


// OTra formade declarra strings  o cualquiero otro arrglo
const meses = new Array("enero", "marzo","Marzo");
console.log(meses);
meses.push("juan"); // lo agrega al final del arrglo 
console.log(meses.indexOf("Abril")); // regresa la psociion 

// Añadir el inicio del arreglo
meses.unshift("hola");

// como eliminar un elemnto de un arrglos
meses.pop(); // elimina elmento final 
// elimina primer elemnto 
meses.shift();
// eliminar  un rago o el de enemdio 
// prrimer psocion que quieres quitra 
// hasta donde 
meses.splice(2,1); // solo quita el elemto 2 

// reverse cabia el orden
meses.reverse();

//Unir un arreglo con otro
let arreglo1 =[1,2,3,4];
arreglo2= [9,8,7];
console.log(arreglo1.concat(arreglo2));

//Ordenar un Arreglo 
const frutas = ["PLATANOS", "MANZANA", "FRESA", "NARANJA"];
frutas.sort(); // ordena un arreglo por abecedario

// Ordenar numeros
arreglo1= [3,8,23,34,12,34,56,23,22,34];
arreglo1.sort(function (x,y){
    return x-y;
}); // ordena rarro

// La variable const en objetos y arreglos
const  numeritos=[1,2,3,4,4];
numerityo[0]=4;
// El arreglo completo no puede ser modificado pero lso elemntos indiviadles si se pueden modificar

////Objetos en JS ///
const persona = {
    nombre: "Miguel",
    apellido: "Martinez",
    profesion: "Diseñador Grafico",
    email:"ns.chuz@yahoo.com",
    edad: 20,
    musica: ["Trance" , "Grunge"],
    hogar: {
        ciudad:"df"
        pais: "mexico"
    },
    naciemiento: function(){
        return new Date().getFullYear-this.edad;
        // utilizar this paraa acceder a las ismas propiedades del objeto 
    }
}
console.log(persona);
console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.musica);
persona.musica.push("Alternativo");
persona.hogar.pais

// otra forma de acceder no recomendable
console.log(persona["hogar"]["pais"]);
persona.naciemiento(); //1998


//Areglos de Objetos 
const autos =[
{modelo: "mustang" , motor: 6.1}
{modelo: "camaron" , motor: 6.1}
{modelo: "challegnger" , motor:6.1}
];
console.log(autos[0].modelo);
console.log(`${autos[i].modelo}`);

//si pueden ser modificado aunque esten en const 
autos[0].modelo="Audi";


//Funciones en JS
function saludar (nombre){
    console.log(`Hola ${nombre}`);
}
saludar("Chuz");

//pasarle argumentos a las funciones 
function sumar (a,b){
    console,log(a+b);
}
sumar(1,2);

fuction sumar (a,b){
    return a+b;
}
let suma;
suma=sumar(5,2);
//////////////////////7 function declarartion

function saludar ( nombre="visitante"){
   
    return `hola ${nombre}`;
}
let saludo;
saludo =  saludar("chuz"); // si no pogno nombre aparece visitante 
console.log(saludo)

///////////// fuction expresion 
const suma = function (){
    return a+b;
}
console.log(suma(12));

const saludar = function( nombre="Visitantes" , edad=20 , trabajo="desarrollador"){
    return `hola , tienes ${edad} , tu edad es ${edad} , trabajo ${trabajo}`;
}

// functions qeu dse declaran inmeditamnte  IIFE

(function (tecnologia){
Console.log(`Aprendiendo ${tecnologia}`);
})("JavaScruip"); // asi funciona jQUERY

// otro tipo de funciones son metodos de proíedad 
//cuando una funcion se pone dentro de un objeto funcion dentro de un objeto se le llama metodo 

const musica ={
    reproudcir =function( id ){
     console.log(`Reprocducir msuica ${id}`);
    }
    pausar = function(){
        console.log(`pausar musica`);
    }
}

// los metodos tambien se pueden guardarse / crearse fuera del objeto 
musica.borra = function(id){
    console.log(`Borrando la cancion con id${id}`);
}


musica.reproudcir(30);
musica.pausar(id);
musica.borra(id);

// manejando los errores try catch 
// funcion que no exite 
try{
    algo();
}catch(error){
    console.log(error)
}finally{
    console.log("No le imorta , ejecutalo de todos modos");
}



function obtenerCliente (){
    console.log("Decsrgando ....");
    setTimeout(function(){
        console.log(`completo`);
    },3000); 
}

obtenerCliente();

// Tema de Fechas exite el objeto Date
 const diahoy = new Date ();
 console.log(diahoy);

 //fecha en especifivo mes , dia  y año 
 let navidad2 = new  Date('12-22-2007');
 console.log(navidad2);
 
 let  diaHoy = new Date();
 valor= diaHoy.getMonth();
 valor = diaHoy.getDate();
 valor= diaHoy.getDay();
//obtener el año 
valor= diaHoy.getFullYear();
//Minutos
valor=diaHoy.getMinutes();
//hora
valor= diaHoy.getUTCHours();
valor = diaHoy.setFullYear(2020);
valor= diaHoy.getFullYear();

// Podemos usar set y get para obtener get  y set para modificar 

for each 
const pendientes= ["taera" , "comer" , "proyecto"];
pendientes.forEach(function(pendientes ,index){
    console.log(`${index}: ${pendientes}`);
});
console.log(pendientes);

//MAP para recoorrer un  arreglo de objetos 

const carrito = [
    { id:1 , producto1: "libro"},
    { id:2 , producto1: "camisa"},
    { id:3  , producto1: "juego"},

];

const nombreProdcuto = carrito.map(function(carrito){
    return carrito.producto1;
})

console.log(nombreProdcuto);


/////
cost automovil ={
    modelo: "camaro ",
    motor: 6.1 ,
    anio: 1992
}

for(let auto in automovil ){
    console.log(`${auto}: ${automovil[auto]}`);
}

console.log(automovil);


/// Iteradores de js ya includios 
//Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.

//arreglo
const ciudades = ["londres ", "new york", "madrid" , "paris"];
//set
const ordenes = new Set (123,231,131,102);
const datos = new Map();
datos.set("Nombre", "juan");
datos.set("estduandie","desarroollador");

//Entries interator 
//entires a las ciudades
for (let entrada of ciudades.entries()){
    console.log(entrada);
}

//entries ordenes reordader que  el set no tiene llaves 
// regresa un arreglo con posicin cero y valor
for (let entrada of ordenes.entries()){
    console.log(entrada)
}

// entries para Map
for (let entrada of datos.entries()){
    console.log(entrada)
}

///values interador  imprime los valores dek arreglo
or (let entrada of ciudades.values()){
    console.log(entrada);
}f

//entries ordenes reordader que  el set no tiene llaves 
// solo regresa el valor
for (let entrada of ordenes.values()){
    console.log(entrada)
}

// entries para Map
for (let entrada of datos.values()){
    console.log(entrada)
}

//keys interator solo las llaves regresa 
for (let entrada of ciudades.keys()){
    console.log(entrada);
}

for (let entrada of ordenes.keys()){
    console.log(entrada)
}
for (let entrada of datos.keys()){
    console.log(entrada)
}

/// defaukto cundo no le paso el tipo de interador quiero 
for (let entrada of ciudades){
    console.log(entrada);
}

for (let entrada of ordenes){
    console.log(entrada)
}
for (let entrada of datos){
    console.log(entrada)
}
// irteradores para string 
cont mensaje = "aprendiendo javscript ";
// forma vieja
for (let i=0; i<mensaje.length; i++){
    console.log(mensaje[i]);
}
//forma nueva y opptima
for (let letra of mensaje){
    console.log(letra);
}

// obtener los enlaces de varios elemntos a
const enlaces = document.getElementById('a');

for(let enlace of enlaces)
{
    console.log(enlace.href);
}

// video nueva Window Object 
window.console.log("hola"); // pertenece al object 

const nombre = prompt();
console.log(`Bienvendio ${nombre}`);

let altura ,aanchura;
altura= window.outerHeight; // muestra el tamaño de la ventana 
window.innerHeight ; // solo muestra el tamño de la consola 
aanchura=window.outerHeight;
console.log(altura);
console.log(aanchura);

// ubicacion 
let ubicacion ;
ubicacion=window.location;
location.port;
location.hostname;
location.search // regresa la peticion get en un formulario 
 
console.log(ubicacion);

window.navigator;
window.navigator.appName;
window.navigator.language;
window.navigator.userAgent; 

//SCOPE 
// la visibilidad que tiene un valor en un bloque 
// si declaro una variable en una funcion no puedo acceder los distintos alacences 
var a= "a";
var b="b";
const c="c";

//Scope de funcion
function funcionScope(){
    var a="a";
    let b="b";
    const c="C";
    console.log("fUNCION "+a,b,c);
}
funcionScope();
// scope de bloque 
if (true){
    var a="aa";
    let b="bb";
    const c="cc";

}
//Es por ello que no debemos usar var 
//ECMA6 PERMITE SOLUCIONAR ESE PROBLEMA 


//DOM 
//DOCUMENT OJBECT MODEL 
dOCUMENT ES PADRE DE HTML (nodo) 
root es mi html 
head y body 
// selecciona una etiqeta y modificar su eqtieta 
// seleccionar un elemento y recorrer los nodos 
//document es todo el html lo que conforma todo el html 
// Eliminar de Local Storage
//localStorage.clear();

let elemento ;
elemento=document.all; //.all nos regresa en forma de arreglo 
//document.head;
//document.body;
//document.domain;
//document.URL;
//document.forms;
//ddcument.forms[0];
//document.forms[0].className;
//document.forms[0].classList;
//document.images;
//document.images[2].getAtribute("src");
//docuemnt.scripts
elemento=document.scripts;
elemento=document.images;
let images =document.images
let imagenesArr=Array.from(images); /// obtengo en forma de arreglo
//console.log(elemento);
console.log(imagenesArr) //ya no es hml collection y tengo todos los metodos de arreglos
imagenesArr.forEach(function(imagen){
    console.log(imagen);
});
console.log(imagenesArr);

////Seleecionando elemntos 
// video 2
// getElemntById
let elemento;
let encabezado;
elemento=document.getElementById('hero');
//elemento=document.getElementById('hero').id;
//encabezado=document.getElementById('encabezado').innerText;
encabezado=document.getElementById('encabezado');
encabezado.style.background="#333";
encabezado.style.color="#fff";
encabezado.style.padding="20px";

//cambiar el texto 
encabezado.innerText="Los mejores Cursos";

console.log(elemento);
console.log(encabezado);

//video 3

// getElemntById
let elemento;
let encabezado;
elemento=document.getElementById('hero');
//elemento=document.getElementById('hero').id;
//encabezado=document.getElementById('encabezado').innerText;
encabezado=document.getElementById('encabezado');
encabezado.style.background="#333";
encabezado.style.color="#fff";
encabezado.style.padding="20px";

//cambiar el texto 
encabezado.innerText="Los mejores Cursos";

console.log(elemento);
console.log(encabezado);

// video 3  qreyselector teenmso que usar la sintaxis de css
const encabezado= document.querySelector("#encabezado");

//aplicando css
encabezado.style.backgrouf="#333";
encabezado.style.color="#fff";
encabezado.style.padding="20px";
console.log(encabezado);

// la diferencia getelemntbuyd solo funciona con id 
//qeryselector sirve para id y clase 
const encabezado= document.querySelector(".encabezado");
//solo regresa el primero elemnto con el nombre de la clase o id 
// para seleccionar todos usamos 
//const encabezado= document.querySelectorAll(".enlace");
//console.log(encabezado);
const encabezado= document.querySelector(".card img ");
console.log(encabezado);
*/

/*
//query selector 
let enlace;
enlace=document.querySelector('#principal a:first-child');
enlace=document.querySelector('#principal a:nth-child(3)');
enlace=document.querySelector('#principal a:last-child');

console.log(enlace);
*/


// video 4  seleccionando multiples elemntos 
/*
let enlaces = document.getElementsByClassName('enlace');
enlaces=enlaces[0];
console.log(enlaces);
// si lo hubirea hecho con queryselector me retorna solor el primero
//onst enlaces = document.querySelector('.enlace'); // me retorna solo el primeor
*/

/*
// se peuden combinar
const listEnlace = document.querySelector("#principal").getElementsByClassName("enlace");
console.log(listEnlace);
*/
// otro 
/*
const links = document.getElementsByTagName('a');
links[18].style.color='red';
links[18].textContent="Nuevo Enlace";
let enlaces= Array.from(links);
//se vuelven array ya deja de ser una collecon 
console.log(enlaces);
enlaces.forEach(function(enlace){
    console.log(enlaces.textContent);
});
*/
// video 5 
// querySlectorALL
const enlaces = document.querySelectorAll('img');
//enlaces[1].style.background="red";
console.log(enlace);
//const enlaces = documento.querySelectorALL('#principal a:nth-child (odd)');


*/
// video traversion hijo a padre al reves
/*
const enlaces = document.querySelectorAll(".enlace");
console.log(enlaces[0].parentElement);
*/
//subimos utilizando prentEelemnt
/*
const  cursos = document.querySelectorAll(".card");
console.log(cursos[0].parentElement.parentElement.parentElement.children.textContent="hola desde traversing ");
*/
// recorrer tu sitio atraves de js  como si fuera un mapa 
const enlaces = document.querySelectorAll(".enlaces");
console.log(enlaces[0].nextElementSibling.nextElementSibling)


// video Creando Elemntos con JS
const enlace = document.createElement("a");
//agregamos una clase
enlace.className="enlace";
//añadir un id 
enlace.id="nuevo-id";
//atirbuto de href
enlace.setAttribute("href","#");
//añadir  texto 
enlace.textContent="Nuevo enlace";
//Agregamos al html 
document.querySelectorAll("#secundaria").appendChild(enlace);
console.log(enlace);


//  video Remplazando elemntos de js
//modificamos un elemnto exitente 
const nuevoElementos=document.createElement('h2');

//agrgar un id
nuevoElementos.id="encabezado";

//agragar nuevo texto 
//teenmos de refrencia el padre
nuevoElementos.appendChild(document.createTextNode ('Los Mejores Cursos'));
//Elemnto anterior sera remplazado 
const anterior = document.querySelector("#encabezado");
const elPadre= document.querySelector("#lista-cursos");

//remplazar 
elPadre.replaceChild( nuevoElementos, anterior);

console.log(anterior.parentElement);

/// elimiar elementos 
//// video eliminado elemntos agrgando y quitando elemntos 

//const enlaces= document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principa');
//enlaces[2].remove();
//otra forma
//navegacion.removeChild(enlaces[0]);

//onsole.log(enlaces);

const primerLi= document.querySelector('.enlace');
let elemnto;
//obtener la clase de ccs
elemnto=primerLi.className;
elemnto=primerLi.classList;
elemnto=primerLi.classList.add('nueva-clase');
elemnto=primerLi.remove('nueva-clase');

// leer atributos 
elemnto=primerLi.getAttribute('href'); // obtener el valor 
primerLi=setAttribute('href','http://faceboo.com');
primerLi.setAttribute('data-id',20);
elemnto=primerLi.hasAttribute('data-id'); // regresa un true has compruebeaque exista un atirbuto 
primerLi.removeAttribute('data-id');
elemnto=primerLi;
console.log(elemnto);
// pudo romever clase , id , imagenes todo el html 

/// nueva seccion EVENT LSITER CLICK
//espera que el usuario haga un accion 
//para que corra 

///nueva seccion 
// event listener click al buscador 
/*
document.querySelector('#submit-buscador').addEventListener('click', function(event){
    event.preventDefault();
    alert('Buscando Cursos');
});
// le pico me lleva un web con idnice gato 
// por el action del html se ejcuta el action del html 
// l¿la hacer clik le paso un event 
// prevnt default  detiene el action 
// previene a la accion por fault 

//otra forma
document.querySelector('#submit-buscador').addEventListener('click' , ejecutarBoton);
function ejecutarBoton (event){
event.preventDefault();
let elemento;
elemento=event.target.id;
elemento=event.target.clasName;
elemento=event.target.innerText;
console.log(elemento);
// nos sale datos lo mas impotante es el target

}

document.querySelector('#encabezado').addEventListener('click',function(e){
e.target.innerText="Nuevo encabzado chuz";

});

*/

// nuevo video otros event listenes
const encabezado= document.querySelector("#encabezado");
const enlaces = document.querySelectorAll('.enlace');
const boton= document.querySelector('#vaciar-carrito');

//click
boton.addEventListener('click', obtenerEvento);

function obtenerEvento (e){
    console.log(`Evento: ${e.type}`);
}


// nuevo vdeio otoros eventos mouse
document.querySelector('#encabezado').addEventListener('click',function(e){
    e.target.innerText="Nuevo encabzado chuz";
    
    });
    
    
    const encabezado= document.querySelector("#encabezado");
    const enlaces = document.querySelectorAll('.enlace');
    const boton= document.querySelector('#vaciar-carrito');
    
    //click
    boton.addEventListener('click', obtenerEvento);
    boton.addEventListener('dbclick', obtenerEvento); // dice cuando hacemos doble click
    boton.addEventListener('mouseenter','obtenerEvento');//cuando colocamos el enter sobre el boton 
    boton.addEventListener('mouseleve','obtenerEvento'); // cuando salimos del boton
    boton.addEventListener('mouseover','obtenerEvento');
    boton.addEventListener('mouseout','obtenerEvento');
    boton.addEventListener('mousedown','obtenerEvento'); // cuando presiono 
    boton.addEventListener('mouseup','obtenerEvento'); // cuando suelto es cuando se ejcuta
    
    encabezado.addEventListener('mousemove',obtenerEvento);
    
    
    function obtenerEvento (e){
        console.log(`Evento: ${e.type}`);
    }

    
    /// nuevo video Event BUbbling 
    // cuando tenemos selctores anidadoo al hacer click nos selecciona todos los selectores 
const card = document.querySelector('.card');
const infoCrad= document.querySelector('.info-card');
const agrgarCarrito= document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
console.log("Click en card");
e.stopPropagation(); // ya no se propaga a info card o agregar carriro es cuando tenemos selectores dentro de otros 
});
infoCrad.addEventListener('click', function(e){
    console.log("Click en info cusrso");
    e.stopPropagation();
    });
 agrgarCarrito.addEventListener('click', function(event){

        console.log("Click en Agregar a carrito");
        event.stopPropagation();
        });
  // event bubling toco algo y se propopaga todo 

    // video dlegatiion
    document.body.addEventListener("click" , eliminarElemento);
    /// borramos elemntos de un carrito 
      function eliminarElemento (e){
            e.preventDefault();
            console.log("Click");
            console.log(e.target.classList);
            if (e.target.classList.contains('borrar-curso')){
                console.log("si");
                console.log(e.target.parentElement.parentElement.remove());
            }
            if (e.target.classList.contains('agregar-carrito')){
                console.log("Curso Agregado");
            }
            else{
                console.log("NO");
            }
      };
      // comprobamos donde esta dando click y relizar una accion 
    

      // objetc litear 

      const cliente = {
          nombre: "Juan",
          saldo : 200 , 
          tipoCliente: function(){
              let tipo;
              if(this.saldo>100){
                  tipo="gold";
                  
              }else if(this.saldo>){

              }
              else{
                  tipo="normal";
              }
              return tipo;
          }
      }