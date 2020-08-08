$(document).ready(function() {
	
	var resultado= $('#animals > div')

	//doom travversion
	//first(), last()
	var result = $('#animals').children().first()
		.children('.creature').last();
	console.log(result); //obtenemos a cats 

	//prev()
	result = $('#animals').children().first()
		.children().last().prev().prev();
	console.log(result); //obtenemos cat a partir del ultimo prire

	//next()
	result = $('#animals').children().first()
		.children().first().next();
	console.log(result);
});


//traversion g para elemntos descendientes 
//	var result = $('#animals').children() muestra los dos div mammal y reptiles



//result = $('#animals').children().first()
// .children().last() praire