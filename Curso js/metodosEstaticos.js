//metodos que no necesitas de un objeto para ser ejecutados

class Usuario{
    constructor (permisos = "lectura"){
        this.permisos=permisos;
    }
    static createAdmin(){
        let user= new Usuario("administador");
        return user;
    }
}


//No es necesario crear un objeto 
Usuario.create();

//factory  un objeto que se encarga en crear objetos
let adminitador = Usuario.createAdmin();