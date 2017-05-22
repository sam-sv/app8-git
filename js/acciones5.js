// JavaScript

$(document).ready(function(e){
	document.addEventListener("deviceready",function() {
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap bepp
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});//tap vibrar
		
	},false); //deviceready
}); //ready
			
		
