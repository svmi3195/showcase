$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function(data) {
			processData(data);
		;}
     });
});

function processData(data){
	
	$('div').append(data.second);
}