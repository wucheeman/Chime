$(document).ready(function() {
  var path = 'user';
  $('.entity').click(function(event) {
    event.preventDefault();
    path = $(this).attr("data-value");
  });

$(".dropdown-menu li").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

  $('#login').click(function(event) {
    event.preventDefault();
    $('#login-success').css('visibility', 'hidden');
    var input = {
      entity: path,
      username: $('#username').val().trim(),
    };
    $.ajax('/login', {
      type: 'POST',
      data: input,
      statusCode: {
        404: () => {
          $('#login-success').css('visibility', 'visible');
        }
      }
    }).then(function(data) {
      if(data) {
        location.replace(data);
      }
      else {
        location.reload();
      }
    });
  });
});