$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.txt",
        dataType: "text",
        success: function(data) {
			processData(data);
		;}
     });
});

function processData(data){
	
	$('div').append(data);
	
}