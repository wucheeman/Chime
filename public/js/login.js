$(document).ready(function() {
  $('#login').click(function(event) {
    event.preventDefault();
    var input = {
      entity: $('input[name="entity"]:checked').val(),
      username: $('#username').val().trim(),
      password: $('#password').val()
    };
    $.post('/login', input, function(data) {
      // if validated, then
      location.replace(data);
    });
  })
});