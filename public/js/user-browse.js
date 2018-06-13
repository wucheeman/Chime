$(document).ready(function() {
  $('.subscribe').click(function() {
    var org = $(this).attr('data-name');
    if ($(this).attr('data-sub') === "false") {
      $.ajax({
        method: 'POST',
        url: `/api${location.pathname.slice(0, -('/browse').length)}/following/`,
        data: {name: org}
      }).then(function() {
        location.reload();
      });
    } else if ($(this).attr('data-sub') === "true") {
      $.ajax({
        method: 'DELETE',
        url: `/api${location.pathname.slice(0, -('/browse').length)}/following/${org}`,
      }).then(function() {
        location.reload();
      });
    }
  });
  
});