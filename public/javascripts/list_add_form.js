
var orig_item = $('.item').first();

function add() {
  last_id = parseInt($('.item').last().attr('id'));
  new_item = orig_item.clone();
  new_item.attr("id", (last_id + 1).toString());
  new_item.find("label").html("Item #" + (last_id + 2).toString());
  new_item.find("input").attr("name", (last_id + 1).toString());
  new_item.find("input").val("");
  new_item.appendTo($('#items'));
}

function remove(i) {
  if (i.closest('.item').id != orig_item.attr('id')) {
    i.closest('.item').remove();
  } else {
    $(i).closest('.item').find("input").val("");
  }
}
