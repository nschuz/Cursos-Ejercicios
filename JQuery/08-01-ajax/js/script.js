$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('result.html')//done es un metood cuando ha terminado de manera satifactoria cuando se combleta lo que va hacer la funcion 
			.done(function(response){
				$('#result').html(response);
			});		
	});	
});

//ajax es muy utilizada utilizar peticiones asincronas o ajax en vez de pedir la pagina completa solo pedimos fragementos de de la pagina y son mas veloces no hay que

//en este ejemolo obtenemos hmtl remoto de ajax