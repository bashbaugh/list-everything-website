
var orig_item = $('#0');

function add() {
  last_id = parseInt($('.item').last().attr('id'));
  console.log(last_id);
  new_item = orig_item.clone();
  new_item.attr("id", (last_id + 1).toString());
  new_item.find("label").html("#" + (last_id + 2).toString());
  new_item.find("input").attr("name", (last_id + 1).toString());
  new_item.find("input").val("");
  new_item.find("button.input-group-text").removeAttr("disabled");
  new_item.appendTo($('#items'));
}

function remove(i) {
  i.closest('.item').remove();
}
