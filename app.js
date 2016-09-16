$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function(data) {
			processData(data);
		;}
     });

    var msecs = Date.now();
    document.cookie = msecs;

    $('.cookieDiv').append(document.cookie + " ");
    

});

function processData(data){
	
	$('.dataDiv').append(data.second);
}

