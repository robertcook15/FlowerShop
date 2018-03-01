var gallery = document.getElementById("shopping"),
    webPage2 = "gallery.html";

gallery.addEventListener("click", function(event){
	event.preventDefault();
	window.location = webPage2;
},false);