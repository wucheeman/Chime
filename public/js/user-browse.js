$(document).ready(function() {
  $('.subscribe').click(function() {
    var org = $(this).attr('data-name');
    $.ajax({
      method: 'POST',
      url: `/api/${location.href.slice(0, -('/browse').length)}/following/`,
      data: {name: org}
    }).then(function() {
      location.reload();
    });
  });
  
});