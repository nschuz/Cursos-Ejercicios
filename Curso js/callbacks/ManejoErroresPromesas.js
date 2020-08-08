const { Promise } = require("bluebird");

let promesa= fetch('https://api.github.com/user/chuz/Respos');





promesa.then(()=>{}).catch((err)=>{console.log(err)});


///
(async function(){

    try {
        let promesa= await Promise.reject('Erroe');
        let promesa2= await Promise.reject('Erroe');
    } catch (err) {
        console.log(err);
    }

})()
//cuALQUIERa de alguna falle va mandar e error
