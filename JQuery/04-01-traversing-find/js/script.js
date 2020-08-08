$(document).ready(function() {
	
	//CSS selectors
	var result = $('#animals .creature');
	console.log(result); //vemos lo resultados en la cosola

	//DOM traversing (more efficient)
	result = $('#animals').find('.creature');
	console.log(result);
});

//travsing reccorre el dom y buscar los elemnteos que queremos. una vez encontrados podemos manipularlos 

//es mas efeicioente a compracion de la anteriror 