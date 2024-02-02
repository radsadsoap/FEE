function myFunction() {
    var x = document.getElementById("myDIV");
    const button = document.getElementById('button')

    button.onclick = function() {
        if (button.onclick === true) { 
            document.getElementById("myDIV").classList.toggle("vissible");
        } else {
            document.getElementById("myDIV").classList.toggle("hidden");  
        }
    } 
}


