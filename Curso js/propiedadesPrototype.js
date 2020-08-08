function User (){

}

function admin (){

}




let user = new User();
console.log(user.__proto__);
console.log(User.prototype);
//el protipo de una funcion pasa hacer el protiopo de los objetos creados de esa funcion 
let chuz = Object.create(user);
User.prototype.saludar= function(){
    console.log("hola");
}
user.saludar();
chuz.saludar();


Admin.prototype= new User();// heredamos user hacia Admin 
