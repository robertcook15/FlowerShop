var menu = document.getElementById("menu");  
menu.addEventListener("click", openNav);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


var closeBtn = document.getElementById("closebtn");
closeBtn.addEventListener("click", closeNav);

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


