$(document).ready(function(){
  $('.order-form').on('submit', function(event){
    event.preventDefault();
    // if input has attribute required
    var requiredFields = $('input[required]');
    // use each();
    var isValid = true;
    $(requiredFields).each(function(){
      // check if length of text is 0
      if ($(this).val().length === 0) {
        // consider the form as invalid
        isValid = false;
        // add .has-error class to this input's parent .form-group
        $(this).parent.addClass('has-error');
        $('.error-message').show();
    } else {
      // else the input doesn't have an empty value
      // Remove the .has-error on the parent of the input (AKA the form-group)
      $(this).parent.removeClass('has-error');
    }
  });
    // If the form wasn't invalid (AKA considered valid) show a message to the user
    if(isValid){
      $('.error-message').hide();
      alert('Hey you filled out the form!');
    } else {
      $('.error-message').show();
    }
}