$(document).ready(function() {
  $('#send').click(function() {
    var text = $('#message').val().trim();
    $.ajax({
      method: 'POST',
      url: `/api/${location.href}/texts`,
      data: {message: text}
    }).then(function() {
      $('#message').val('');
      location.reload();
    });
  });
  
});