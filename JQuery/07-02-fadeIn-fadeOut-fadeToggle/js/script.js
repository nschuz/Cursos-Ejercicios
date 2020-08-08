$(document).ready(function() {
	
	$('.item-box').on('click', '.info-link', function(event) {
		event.preventDefault();
		//fadeIn(), fadeOut(), fadeToggle()
		$(this).closest('.item-box').find('.more-info').fadeToggle(1000);
	});
});///es similar que otro pero muestra una animacion que parrece de apoco a mucho 