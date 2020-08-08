$(document).ready(function() {
	$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();
		console.log(value);

		var html = '<div class="item">\
			<div class="remove">X</div>' + value + '</div>';
		console.log(html);

		//$('#places-container').children().last().after(html);
		$('#places-container').children().first().before(html);
	});
});

//before y after afuera anytes y despues del objeto en la misma jerarquia 