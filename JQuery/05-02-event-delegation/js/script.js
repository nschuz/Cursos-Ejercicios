$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() { //escuchamos click un selectro que se va aplicar dentro de ese elemento
		console.log(this);

		$(this).parent().toggleClass('highlighted');
	});
});

//Delegacion de Eventos
//selccionamso ele objeto contenedor (padre)
// y kuego decir que escuchar en mi div cuando se presione
//realmente estamso escuchando al contenedor en resumen se enfoca al elemnto conteendor y luego hace refrencia al elemnto donde va llmar ele elemnto 