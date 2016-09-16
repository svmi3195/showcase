$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function(data) {
			processData(data);
		}
     });

        
     $('#cookieBtn').on('click', newCookie);
     
     $('.cookieDiv').append(document.cookie);
    
    

});

function processData(data){
	
	$('.dataDiv').append(data.second);
}

function newCookie(){
        var name = $("#input").val();
        document.cookie = "username=" + name + "; expires=Fri, 23 Sep 2016 12:00:00 UTC; path=/";
        $('.cookieDiv').append(" new cookie: " + document.cookie);
}