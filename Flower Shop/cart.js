var cart = document.getElementById("cart"),	
	webPage = "orderForm.html";
	
	

cart.addEventListener("click", function(event){
	event.preventDefault();
	window.location = webPage;
},false);

