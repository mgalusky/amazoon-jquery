$(document).ready(function(){
  $('.order-form').on('submit', function(event){
    event.preventDefault();
    // if input has attribute required
    var requiredFields = $('input[required]');
    // use each();
    $(requiredFields).each(function(){
      // check if length of text is 0
      if ($(this).last().val().length === 0) {
        // add .has-error class to this input's parent .form-group
        $(this).parent.addClass('has-error');
    }
  })
});
