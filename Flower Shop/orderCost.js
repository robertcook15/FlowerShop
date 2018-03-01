var button1 = document.getElementById("button1"),
    button2 = document.getElementById("button2"),
    button3 = document.getElementById("button3"),
    button4 = document.getElementById("button4"),
    button5 = document.getElementById("button5"),
    button6 = document.getElementById("button6");
var totalCost = 0,
    itemCount = 0;
    

button1.addEventListener("click", function (event) {
    event.preventDefault();    
    var cost = 29.99;
    totalCost += cost;
    itemCount++
    document.getElementById("checkOut").innerHTML = "Check Out Total items(" + itemCount + ")"  +  " Cost (" + +totalCost.toFixed(2) + ")";        
}, false);
button2.addEventListener("click", function (event) {
    event.preventDefault();
    var cost = 29.99;
    totalCost += cost;
    itemCount++
    document.getElementById("checkOut").innerHTML = "Check Out Total items(" + itemCount + ")"  +  " Cost (" + +totalCost.toFixed(2) + ")";    
}, false);
button3.addEventListener("click", function (event) {
    event.preventDefault();
    var cost = 29.99;
    totalCost += cost;
    itemCount++
    document.getElementById("checkOut").innerHTML = "Check Out Total items(" + itemCount + ")"  +  " Cost (" + +totalCost.toFixed(2) + ")";   
}, false);
button4.addEventListener("click", function (event) {
    event.preventDefault();
    var cost = 29.99;
    totalCost += cost;
    itemCount++
    document.getElementById("checkOut").innerHTML = "Check Out Total items(" + itemCount + ")"  +  " Cost (" + +totalCost.toFixed(2) + ")";    
}, false);
button5.addEventListener("click", function (event) {
    event.preventDefault();
    var cost = 29.99;
    totalCost += cost;
    itemCount++
    document.getElementById("checkOut").innerHTML = "Check Out Total items(" + itemCount + ")"  +  " Cost (" + +totalCost.toFixed(2) + ")";    
}, false);
button6.addEventListener("click", function (event) {
    event.preventDefault();
    var cost = 29.99;
    totalCost += cost;
    itemCount++
    document.getElementById("checkOut").innerHTML = "Check Out Total items(" + itemCount + ")"  +  " Cost (" + +totalCost.toFixed(2) + ")";    
}, false);




