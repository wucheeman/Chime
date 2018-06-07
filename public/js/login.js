$(document).ready(function() {
  $('#login').click(function(event) {
    event.preventDefault();
    var input = {user: $('#user').val().trim()};
    $.post('/login', input, function(data) {
      // if validated, then
      location.replace('/user/' + input.user);
    });
  })
});