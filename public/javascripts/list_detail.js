function star(action) {
  $.ajax({
    url: location.href + "/star",
    type: "POST",
    dataType: "json",
    data: JSON.stringify({action: action}),
    contentType: "application/json",
    cache: false,
    timeout: 8000,
  })
  .done(function(data) {
    console.log("sucess");
    
  })
  .fail(function() {
    alert("An error occurred");
  })
  .always(function() {
    console.log("complete");
  })
    
} 
