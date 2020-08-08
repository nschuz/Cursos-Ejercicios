$(document).ready(function() {

  $('#hasPets').on('change', function(){
    if($(this).is(':checked')) {
      $('#pets-row').show();      
    }
    else {
      $('#pets-row').hide();
    }
  });
  $('#hasPets').trigger('change'); //el metodo trigger gatilla un evento cuando cargamos la pgina pra que se muestre desde principio
});
