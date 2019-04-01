function star(action) {
  $('#favorite-star').addClass('spinning');
  $.ajax({
    url: location.href + "/star",
    type: "POST",
    dataType: "json",
    data: JSON.stringify({action: action}),
    contentType: "application/json",
    cache: false,
    timeout: 10000,
  })
  .done(function(data) {
    if (data.completed == "error") {
      $('#alert-ajax-error').addClass('show');
    } else {
      $('#favorite-btn').removeClass('btn-light btn-warning');
    }
    if (data.completed == "star") {
      $('#favorite-btn').addClass('btn-warning');
      $('#favorite-btn').attr('onclick', "star('unstar')");
      $('#favorite-text').html(" Favorited");
    }
    if (data.completed == "unstar") {
      $('#favorite-btn').addClass('btn-light');
      $('#favorite-btn').attr('onclick', "star('star')");
      $('#favorite-text').html(" Favorite");
    }
  })
  .fail(function() {
    $('#alert-ajax-error').addClass('show');
  })
  .always(function() {
    $('#favorite-star').removeClass('spinning');
  })
    
} 

function alert_close(close) {
  $(close).parent().removeClass('show');
}
