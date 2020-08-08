$(document).ready(function() {
	//parent()
	var result = $('#cat').parent();
	console.log(result);//regresa el padre que seria div.creature.category

	//parents() devuelve los aancetros 
	result = $('#cat').parents('.category');
	console.log(result);

	//closest() regrese el ancestro mas cercano 
	result = $('#cat').closest('.category');
	console.log(result);
});

//elementos padres
//osea del hijo hacia los padres o abuelos 
//Tener en cuenta que se muestra el elemento html no el texto 