$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function(event){
		event.preventDefault();//al hacer un lik le quitamos ese comportmaiento
		//show() hide()
		$(this).closest('.item-box').find('.more-info').toggle(1000, function(){
			alert('se completo!');
		});
	});
	//this seria el link closest porque viy hacia aarriba  donde termiando un segundo se ejucta lo que hay adentro. toggle muestra y oculta con la misma duracion de tiempo en forma de animacion
	//closets para encontrar item box porqu e hay dos niveles arriba  ahora dentro de itembox voy a buscar 
	
});