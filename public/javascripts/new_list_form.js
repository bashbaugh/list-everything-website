$(document).ready(function() {

    $('#moderate-checkbox').change(function() {
        if(this.checked) {
            $('#moderate-collapse').collapse('show');
        } else
        {
          $('#moderate-collapse').collapse('hide');  
          console.log('h');
        }
    });
    
    $('#moderate-collapse').on('shown.bs.collapse', function() {
        if($('#moderate-checkbox').is(':checked')) {
            $('#moderate-collapse').collapse('show');
        } else
        {
          $('#moderate-collapse').collapse('hide');  
          console.log('h');
        }
    });
    
    $('#moderate-collapse').on('hidden.bs.collapse', function() {
        if($('#moderate-checkbox').is(':checked')) {
            $('#moderate-collapse').collapse('show');
        } else
        {
          $('#moderate-collapse').collapse('hide');  
          console.log('h');
        }
    });
    
    $('#agreement-checkbox').change(function() {
        if(this.checked) {
            $('#agreement-collapse').collapse('show');
        } else
        {
          $('#agreement-collapse').collapse('hide');  
          console.log('h');
        }
    });
    
    $('#agreement-collapse').on('shown.bs.collapse', function() {
        if($('#agreement-checkbox').is(':checked')) {
            $('#agreement-collapse').collapse('show');
        } else
        {
          $('#agreement-collapse').collapse('hide');  
          console.log('h');
        }
    });
    
    $('#agreement-collapse').on('hidden.bs.collapse', function() {
        if($('#agreement-checkbox').is(':checked')) {
            $('#agreement-collapse').collapse('show');
        } else
        {
          $('#agreement-collapse').collapse('hide');  
          console.log('h');
        }
    });
});


