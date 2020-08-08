$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('result.html', {
			beforeSend: function() {
				$('#status').text('Cargando..');
			}
		})
		.done(function(response){
			$('#result').html(response);
		})
		.always(function(){
			$('#status').text('Completado');
		});		
	});	
});//always se ejucta siempre anque  pase un error o si se logro

//Ejecuantadno codigo antes y despues de la peticion  detectar cuando se ha iniciado la operacion de ajax 