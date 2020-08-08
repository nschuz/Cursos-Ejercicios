document.getElementById("form-task").addEventListener("submit", saveTask);

//capturar el evento
function saveTask(e){

    const title =document.getElementById('title').value;
    //console.log(document.getElementById('title').value);
const description= document.getElementById('description').value

//console.log(description);

//lo guardamos en un objeto
const task ={
    title: title, //-> matena rapido solo por title
    description: description
};

//console.log(task);

//usamos local storage para guradarda los datos 
//JSON.stringify convertimos un objeto a atring
//localStorage.setItem('tasks', JSON.stringify(task));

//como obtener 
//localStorage.getItem('tasks');


if (localStorage.getItem('tasks')===null){
    //si esta vacion 
    let tasks=[];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}else{
    //si no esta vacio
   let tasks = JSON.parse (localStorage.getItem('tasks'));
   tasks.push(task);

   //volvemos almavenar
   localStorage.setItem('tasks',JSON.stringify(tasks));

}






    getTask();
    //debemos cancelar el comportamiento por default  de regrescra la pgina 
    e.preventDefault();


    

}

//va hacer una conulta a local storage
function getTask(){

 let tasks=   JSON.parse(localStorage.getItem('tasks'));

let taskView= document.getElementById('tasks');
taskView.innerHTML=''; // lo dejamo limpio

for(let i=0; i<tasks.length; i++){
    let title =tasks[i].title;
    let description =tasks[i].description;
    
    taskView.innerHTML += `<div class="card mb-3"> 
   <div class= "card-body">
    <p>${title}- ${description} </p>
    <a class="btn btn-danger text-white" onclick="deleteTask('${title}')">Delete</a>
   </div>
  </div>`;
}


}

function deleteTask(title){
let tasks=  JSON.parse(localStorage.getItem('tasks'));
for (let i=0; i<tasks.length; i++){
    if(tasks[i].title==title){
        tasks.splice(i,1);
    }
}
localStorage.setItem('tasks',JSON.stringify(tasks));
getTask();
}
//deleteTask();

//getTask();