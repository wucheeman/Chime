$(document).ready(function() {
  $('.subscribe').click(function() {
    var org = $(this).attr('data-name');
    $.ajax({
      method: 'DELETE',
      url: `/api${location.pathname}/following/${org}`,
    }).then(function() {
      location.reload();
    });
  });
  
});