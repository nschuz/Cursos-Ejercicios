$(document).ready(function() {
	$('#example').on('click', 'a', function(e) {
		e.preventDefault();//pemite anular ese comportamiento predetermiando 
		e.stopPropagation();//si le doy clik imprime consola con stop si toco afuera del link  me muestra hello container
		console.log('hello');
	});

	$('#example').on('click', function(e) {
		console.log('hello container');
	});
});