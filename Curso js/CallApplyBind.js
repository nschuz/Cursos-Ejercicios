//ejcuta una funcion inmedita

function executor(funcion) {
    funcion.call(tutor); // funcion.call(tutor); 
    funcion.apply(tutor);
}

let tutor={
    nombre:"chuz",
    apellido:"Hernandez",
    nombreCompleto: function () {
        console.log(this.nombre + " " + this.apellido);
    }
}

tutor.nombreCompleto();

executor(tutor.nombreCompleto); //undefined undefined por que el vaor de thsse reaigno en el cuepor de la funcion executor pero si usamo arrow el contexto no se modifica

/// todos los argumentos a call depues del primero se envian como argumentos  apply se econporta igual solo que los argumentos se mandan en un arreglo


//bind  mjora la herrmaienta executor dejar que el executor siga igual 
executor(tutor.nombreCompleto.bind(tutor));// quien sera this de ante mano  sabe quien es this por predefinidoYTFDSA|   