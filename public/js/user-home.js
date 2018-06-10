$(document).ready(function() {
  $('.unsub').click(function() {
    var org = $(this).attr('data-name');
    $.ajax({
      method: 'DELETE',
      url: `/api/${location.href}/following/${org}`,
    }).then(function() {
      location.reload();
    });
  });
  
});