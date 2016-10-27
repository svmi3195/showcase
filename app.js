<<<<<<< HEAD
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
=======
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
>>>>>>> 4d10b2c9026cfae23b7b581c679986c8155f4765
}