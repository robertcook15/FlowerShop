var orderButton = document.getElementById("order"),
	thankyou = "thankyou.html";

orderButton.addEventListener("click", function (event) {
    var fname = document.forms["Form1"]["fname"].value,
        nameFM = /^[A-Za-z]{2,50}$/,
        lname = document.forms["Form1"]["lname"].value,
        nameLM = /^[A-Za-z]{2,50}$/,
        email = document.forms["Form1"]["email"].value,
        emailM = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        address = document.forms["Form1"]["address"].value,        
        state = document.forms["Form1"]["state"].value,
        stateM = /^(AL|AK|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|‌​MA|MD|ME|MI|MN|MO|MS‌​|MT|NC|ND|NE|NH|NJ|N‌​M|NV|NY|OH|OK|OR|PA|‌​RI|SC|SD|TN|TX|UT|VA‌​|VT|WA|WI|WV|WY)$/ig,
        zip = document.forms["Form1"]["zip"].value,
        zipM = /^\d{5}$/,
        creditCard = document.forms["Form1"]["creditCard"].value,
        creditM = /^4[0-9]{12}(?:[0-9]{3})?$/,
        month = document.forms["Form1"]["month"].value,
        monthM = /^(0[1-9]|1[0-2])$/,
        year = document.forms["Form1"]["year"].value,
        yearM = /^\d{4}$/;

    if (!nameFM.test(fname)) {
        event.preventDefault();
        alert("The first name can only contain letters");       
    }
    else if (!nameLM.test(lname)) {
        event.preventDefault();
        alert("The last name can only contain letters");        
    }
    else if (!emailM.test(email)) {
        event.preventDefault();
        alert("Please enter format XXXX@XXX.XXX");        
    }
    else if (address == "") {
        event.preventDefault();
        alert("Dont leave address blank");        
    }
    else if (!stateM.test(state)) {
        event.preventDefault();
        alert("Please enter format AL,AK,AR ...etc");        
    }
    else if (!zipM.test(zip)) {
        event.preventDefault();
        alert("Please enter 5 digits only");       
    }
    else if (!creditM.test(creditCard)) {
        event.preventDefault();
        alert("Accept Visa Credit Cards only format 16 Digits no dashes");        
    }
    else if (!monthM.test(month)) {
        event.preventDefault();
        alert("Please enter two digit month");        
    }
    else if (!yearM.test(year)) {
        event.preventDefault();
        alert("Please enter full four digit year");        
    } 
	else{
		event.preventDefault();
		window.location = thankyou;
	}
},false)