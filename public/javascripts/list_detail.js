function star(action) {
  $('#favorite-star').addClass('spinning');
  $('#favorite-btn').attr('disabled', '');
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
    if (data.completed == "star") {
      $('#favorite-btn').removeClass('btn-warning btn-light');
      $('#favorite-btn').addClass('btn-warning');
      $('#favorite-btn').attr('onclick', "star('unstar')");
      $('#favorite-text').html(" Favorited ");
      $('#favorite-count').removeClass('badge-light badge-dark');
      $('#favorite-count').addClass('badge-light');
      // Increment counter:
      $('#favorite-count')
      .html((parseInt($('#favorite-count').html()) + 1).toString());
    } else if (data.completed == "unstar") {
      $('#favorite-btn').addClass('btn-light');
      $('#favorite-btn').attr('onclick', "star('star')");
      $('#favorite-text').html(" Favorite ");
      $('#favorite-count').removeClass('badge-light badge-dark');
      $('#favorite-count').addClass('badge-dark');
      // Decrement counter:
      $('#favorite-count')
      .html((parseInt($('#favorite-count').html()) - 1).toString());
    } else {
      $('#alert-ajax-error').addClass('show');
    }
  })
  .fail(function() {
    $('#alert-ajax-error').addClass('show');
  })
  .always(function() {
    $('#favorite-star').removeClass('spinning');
    $('#favorite-btn').removeAttr('disabled');
  })
    
} 

function upvote(upvote_btn) {
  var vote_icon = $(upvote_btn).find('.vote-icon');
  var old_icon_class = vote_icon
  .hasClass('.fa-arrow-down') ? 'fa-arrow-down' : 'fa-arrow-up';
  var position = $(upvote_btn).attr('data-item-position');
  vote_icon.removeClass('fa-arrow-up fa-arrow-down');
  vote_icon.addClass('fa-spinner spinning');
  $(upvote_btn).attr('disabled', '');
  $.ajax({
    url: location.href + "/upvote",
    type: "POST",
    dataType: "json",
    data: JSON.stringify({action: $(upvote_btn).attr('data-action'), item_id: $(upvote_btn).attr('data-item-id')}),
    contentType: "application/json",
    cache: false,
    timeout: 10000,
  })
  .done(function(data) {
    if (data.completed == "upvote") {
      vote_icon.addClass('fa-arrow-down');
      $(upvote_btn).attr('data-action', "downvote");
      $('#ivotetext' + position).html(" Upvoted ");
      // Increment counter:
      $('#ivotec_' + position)
      .html((parseInt($('#ivotec_' + position).html()) + 1).toString());
      $('#ivotec2_' + position)
      .html((parseInt($('#ivotec2_' + position).html()) + 1).toString());
    } else if (data.completed == "downvote") {
      vote_icon.addClass('fa-arrow-up');
      $(upvote_btn).attr('data-action', "upvote");
      $('#ivotetext' + position).html(" Upvote ");
      // Increment counter:
      $('#ivotec_' + position)
      .html((parseInt($('#ivotec_' + position).html()) - 1).toString());
      $('#ivotec2_' + position)
      .html((parseInt($('#ivotec2_' + position).html()) - 1).toString());
    } else {
      $('#alert-ajax-error').addClass('show');
      vote_icon.addClass(old_icon_class);
    }
  })
  .fail(function() {
    $('#alert-ajax-error').addClass('show');
    vote_icon.addClass(old_icon_class);
  })
  .always(function() {
    vote_icon.removeClass('spinning fa-spinner');
    $(upvote_btn).removeAttr('disabled');
  })
}

function alert_close(close) {
  $(close).parent().removeClass('show');
}
