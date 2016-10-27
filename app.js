<<<<<<< HEAD
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
=======
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
>>>>>>> ad0e0ce3dab64dcd81bb02863200e51384fe4bef
}