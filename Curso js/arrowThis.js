//cada vez que envi una funcion a otro funcion y quiero conservar el valor de this utuliza la isntaxis de la flecha 
//por eso fue  la ide a que se creo 

let tutor ={
    nombre:"Chuz",
    apellido:"regis",
    nombreCompleto: function () {
        setTimeout(()=>{
            console.log(this.nombre +"  "+ this.apellido);
        },1000);
    }
}
tutor.nombreCompleto();