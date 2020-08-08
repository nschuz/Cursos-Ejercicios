$(document).ready(function() {
	//keydown, keyup
	$('#example').on('keyup', 'input', function() {
		$('#result').html('Your name is: ' + $(this).val());//el valor del campo de texto con this y su valor cone le metodo val
	});
});