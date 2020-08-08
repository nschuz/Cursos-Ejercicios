function requestHandler (req , res){
   //voy a consulatar al usuarios atreves de u id con la base termine voy manejar una respuetsa con una funcion 
    
   //esta conslta es sencialla veo si un usuario y si no existe actualize sus tareas
   User.findById(req.userId, function(err, user){
        //esyta funcion es un callback espera por una repsueta continuamos con la ejecuacion del codifo 

        if(err){
            res.send(err);
        }else{
            TextTrackList.findById(user.taskId, function (err , task){
                if(err){
                    return res.send(err);

                }else{
                    task.completed=true;
                    task.save(function (err){
                        if(err){
                            return res.send(err);
                        }else{
                            res.send("Task Completed");
                        }
                    })
                }
            })
        }
        


        
    })
}


//los mismo pero en promesas 
//then cuando va dtood bien  el dato que esperamos 
//catch es cuando sucede un error
 function requestHandler (req , res){
     User.findById(req.userId).then(function (user){
         return Task.fidById(user.taskId)
     })
     .then(function (task){
        task.completed=true;
        return task.save();
     })
     .then(function(){
         res.send("Task Completed");
     })
      .catch(function (erroors){
         res.send(errors);
     })
 }


 //Ahora vamo susar AsyncWair
//debemos poner asyc para usar await
 async function requestHandler(req, res){

    try{
        const user=  await  User.fidById(req.userId); //osea que va llevar tiempo es un metodo asincorno 
        const tareas= awaittaskId.findById(user.taskId);
      task.completed=true;
       await task.save();
       res.send("TASK COMPLETED")
   
   
    }catch(e){

    res.send(e);
    
    }

   

}