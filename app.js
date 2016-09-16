$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function(data) {
			processData(data);
		;}
     });

        document.cookie = "username=John Doe; expires=Fri, 23 Sep 2016 12:00:00 UTC; path=/";
        $('.cookieDiv').append(document.cookie);
    
    

});

function processData(data){
	
	$('.dataDiv').append(data.second);
}

