function loginFunction() {
   var user = prompt("Please enter your username", "  ");
   var pass = prompt("Please enter your password", "  ") ;
}

function signupFunction() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("signup").innerHTML = x;
}

