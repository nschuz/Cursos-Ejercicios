const {taskOne , taskTwo} = require('./tareas');

async function main(){

    try{
console.time("Measuring time");

//de manera paralea
const result = await Promise.all([taskOne(), taskTwo()]);

const valorUno=  taskOne(); //queitamos el await
const valorDos=  taskTwo();
console.timeEnd("Measuring time");

console.log(result[0]);
console.log(result[1]);

} catch(e){
    console.log(e);
}

}

main();