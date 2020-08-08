/*
var persona={
    "nombre": "chuz",
    "apellido": "regis",
    "edad": 22,
    "nickname": "chuz regis"
    


};//obejto
var personas =[
    {nombre:"chuz", nickname:"chuz"},
    {nombre:"juan", nickname: "janito"},
    {nombre:"juan", nickname: "janito"},
    {nombre:"juan", nickname: "janito"}
];// creamos una array

var salida = "";

for(let i=0; i<personas.length; i++){
    salida+=`<li> ${personas[i].nombre} su nick name es ${personas[i].nickname} </li>`;
}

console.log(persona.nickname);
console.log(personas[0].nombre);


document.getElementById('personas').innerHTML=salida;
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var respuesta = JSON.parse(xhttp.responseText);
    var personas = respuesta.personas;
    var salida = "";

for(let i=0; i<personas.length; i++){
    salida+=`<li> ${personas[i].nombre} su nick name es ${personas[i].nickname} </li>`;
}




document.getElementById('personas').innerHTML=salida;

}
};
xhttp.open("GET", "personas.json", true);
xhttp.send();