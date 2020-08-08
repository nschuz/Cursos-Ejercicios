let a="hola";
console.log(a);
console.log(Array.isArray(a)); // verificamos si es un array
let arreglo=[1,2,3,4,5];
console.log(arreglo.pop());// borra ultimo elemnto
arreglo.shift(); // borra el primer elemnto
console.log(arreglo);
(arreglo.push(10 ,12, ...arreglo)); // añadimos el ultimo elemnto

console.log(arreglo);
console.log(arreglo.indexOf(10)); // regrsa el indice en donde estamos
console.log(arreglo.lastIndexOf(10)); // no se como funciona se comprta igual que indexOF
console.log(arreglo.reverse()); // inivrte el orden del arreglo
console.log(arreglo);
console.log(arreglo.join(" CHUZ ")); // join  Devuelve un string con ele separadpr que indiquemps , por defecto son comas

let b= [1,2,3,4,5];
b.splice(0,3); // borra desde el indice 0 y  2 numeors
console.log(b);

let string1= "chuz es guapo";
console.log(string1)

// fucle  for in and for of
let names=['paco','chuz', 'juna' , 'pedro'];
for (let i = 0; i <names.length ; i++) {
    console.log(names[i]);
}
console.log("/////////////////////////");
for (let name  of names){
    console.log(name);
}

console.log("////////////");
for (let name in names){
    console.log(name);
    // imprime 0 , 1 ,2 ,3 un for in imprime el indice la posicion se usa para a objetos no para arreglos
}

// obejtos en js
const computer = {
    screensize : 20,
    brand :"apple"
};
let person= {
    name: "juan",
    age: 26,
    son: ["LAURA" , "DIEGO", "CHUZ"],
    estatura: 1.72
};
console.log(person.name);
console.log(person.age);
console.log(person.son[0]);
console.log(person.son[2]);
console.log("////////////");
console.log(person);

for (const key in person){
    console.log(key);
} // imprime los atributos
console.log("///////");
for (const key of person.son){
    console.log(key);
}
for ( const son  in person.son){
    console.log(son);
}// imprime el indice del arreglo

console.log("///////");
for (const key in person){
    console.log(person[key]);
    // me imprime los valores
}

// clases
class Poligono {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get   area  ()   {
        return this.calcArea();
    }
    /*
    public int getedad (){
    return edad;
    }
    * */
    // Método
    calcArea () {
        return this.height * this.width ;
    }
}

const cuadrado = new Poligono (10, 10);

console.log(cuadrado.area);

// 100

///
function hola() {
console.log("hola");
}
hola();

function suma(a ,b) {
    return a+b;
}
let numero=suma(10,10);
console.log(numero);
console.log(typeof (numero)); // regresa que tipo de datos es
console.log(typeof  (string1));

(function (tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
})("JavaScruipt");

function hola (tecnologia ="Hola") {
console.log(`hola ${tecnologia}`);
}
console.log(hola("chuz"));

const cliente = {
    nombre: "Juan",
    saldo : 200 ,
    tipoCliente: function(){
        let tipo;
        if(this.saldo>100){
            tipo="gold";


        }else if(this.saldo>500){
            tipo="Platinum"
        }
        else{
            tipo="normal";
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());
console.log();

/// metodo alternativo para crear objetos
function Cliente(nombre , saldo) {
 this.nombre= nombre;
 this.saldo=saldo;
 this.tipoCliente=function () {
     let tipo;
     if(this.saldo>100){
         tipo="gold";


     }else if(this.saldo>500){
         tipo="Platinum"
     }
     else{
         tipo="normal";
     }
     return tipo;
 }
}
const persona= new Cliente ("Pedro" , 200);
console.log(persona.tipoCliente());
const persona2= new Cliente ('Juan', 6000);
console.log(persona2.tipoCliente());

// obejtos y constructores
//String
const nombre1 ="pedro";
const nombre2= new String ("pedro");
console.log(typeof  nombre1);
console.log(typeof nombre2);
if (nombre1==nombre2){ // no tan estricto
    console.log("son iguales");
}else{
    console.log("no son iguales");
}
// estricto
if (nombre1===nombre2){ // no tan estricto
    console.log("son iguales");
}else{
    console.log("no son iguales");
}

// numeros
const numero1= 20;
const numero2= new Number(20);// esta version new crea una nueva instacia un nuevo objeto
// proto
// boolean
const boolean1 = true;
const booleaan2 = new Boolean(true);

// funciones
const funcion1= function (a,b) {
return a+b;
}

const funcion2 = new Function('a' , 'b' , 'return 1 + 2');


// objetos
const persona1 ={
    nombre: "chuz"
}

//const persona2 = new Object({nombre: "chuz");

    // arreglos
const arreglo1=[1,2,3,4];
const arreglo2= new Array(1,2,3,4);

//prototipos ya es antiguo ahora es con clase
function Clinete (nombre , saldo){
    this.nombre=nombre;
    this.saldo=saldo;
   /* this,tipoCliente= function () { // poner this para para saber que es parte de ese objeto
    let tipo;
    if(this.saldo>1000){
        tipo="gold";
    }else if (this.saldo>500) {
        tipo="patinum";
    }else{
        tipo="normal";
    }
    return tipo;
    } */
}
// podemos definri vvrios objetos con los mismos atributos con valores idtint
const cliente1 = new Clinete("chuz" , 200);
const cliente2 = new Clinete("Juan" , 2000 );
console.log(cliente1); // un ptototype puden ser usados en clientes
// dos razones por usar prototios  1 crear prototipos organizan el codfigp
// restringe que hace una funcion este disponible solo para clientes

// ------CREAMOSUN PROTOTIPO
Clinete.prototype.tipoCliente= function () {
    let tipo;
    if(this.saldo>1000){
        tipo="gold";
    }else if (this.saldo>500) {
        tipo="patinum";
    }else{
        tipo="normal";
    }
    return tipo;

} // esta funcionalidad esta por fuera del objeto los obejto ya no estan tan cragados
// depues de prototype tpdps sus metodos dde ptoro

// protitpo dos que imprime cargo  y saldo
Clinete.prototype.nombreClienetSaldo= function () {
    return `Nombre: ${this.nombre} , Tu saldo es de ${this.saldo},
    Tipo cliente ${this.tipoCliente()}`;
}

//Prototipo  prototipo saldo
Clinete.prototype.retirarSaldo= function (retiro) {
return this.saldo-=retiro;
}

const cliente11 = new Clinete("chuz" , 200);
const cliente12 = new Clinete("Ju" , 2000);
cliente11.retirarSaldo(100);
console.log(cliente11.tipoCliente());
console.log(cliente11.nombreClienetSaldo());
console.log(cliente12.nombreClienetSaldo());

// video heredar prototipos a otro objeto para un digo mas facild e mnatener
// Bca para emepresa
function Empresa(nombre , saldo , telefono , tipo) {
    Clinete.call(this, nombre , saldo); // lo que heredamos
    this.telefono=telefono;
    this.tipo= tipo;
}
//AHORA HEREDAMOS EL PROTTO
Empresa.prototype=Object.create(Clinete.prototype);
const empresa = new Empresa("udemy" , 10000, 525152 , "Educacion");


console.log(empresa);
console.log(empresa.nombreClienetSaldo());

// video objetc crear una nueva forma de crear un objeto  ya con el cl proototype
//object create
  const Clientito ={
    imprimirSaldo: function () {
    return  `hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retirarSaldoo : function (retiro) {
    return this.saldo-=retiro;
    }
}

// creamos el objeto
const mary = Object.create(Clientito);
mary.nombre='MARY';
mary.saldo=1000;
console.log(mary);
// todo esto anterio fue hhasta ecma escrip5 pero llego cma ecript 6

//ECMASCRIPT 6
class  Clientee  {
    constructor(nombre , saldo) {
    this.nombre=nombre;

    this.saldo=saldo;
    }
    imprimirSaldito(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }
    // no ocupan instaaxia
    static  bienevenida (){
        return `Bienvenida al cajero`;
    }

}
const maria= new Clientee("Maria" , "Perez" , 1000);
console.log(maria);
console.log(maria.imprimirSaldito());
console.log(Clientee.bienevenida());

// Herencia de clases

class Emresa extends  Clientee{
    constructor(nombre, saldo , telefono , tipo) {
        super(nombre , saldo); // Va hacia el constrcuto padre
        this.telefono=telefono;
        this.tipo=tipo;
    }
}
const empresaaa = new Emresa("Empresa1" , 10000 ,5510002 , "construccion");
console.log(empresaaa);
console.log(empresaaa.imprimirSaldito());