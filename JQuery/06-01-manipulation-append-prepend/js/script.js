$(document).ready(function() {
	$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();// el valor de ese campo de texto 
		console.log(value);

		var html = '<div class="item">\
			<div class="remove">X</div>' + value + '</div>';
		console.log(html);

		//$('#places-container').append(html);
		//$(html).appendTo('#places-container');

		$('#places-container').prepend(html);//con esto agremao al final de nuestro contenedor place osea el div princpal
		//$(html).prependTo('#places-container');

		//appedn y prepedn metemeos cosas dentro del objeto 

		//before y after afuera anytes y despues del objeto
	});
});