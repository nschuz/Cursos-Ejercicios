$(document).ready(function() {
	$('#example').on('click', function() {
		console.log(this);	//ele objeto del que le damos click ose a el div
			//permiete escuhar el evento click , la funcionn es el controlador de eventos 
		console.log($(this));	//entrega el elemnto  en forma jquery
		
		//$(this).addClass('highlighted'); 
		//ala hacr click agregamos la clase 
		$(this).toggleClass('highlighted');
		//este metodo es como iun interruptor si esta la quita y si no la pone

	});
});


// eventos en jquery