$(document).ready(function() {
  $('.subscribe').click(function() {
    var org = $(this).attr('data-name');
    $.ajax({
      method: 'POST',
      url: `/api${location.pathname}/following/delete`,
      data: {name: org}
    }).then(function() {
      location.reload();
    });
  });
  
});