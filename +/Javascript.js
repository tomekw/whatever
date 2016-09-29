// This is v1 comment line
/* This is v2 comment line */
/** This is v3 comment line **/
alert("This is Javascript.")

function myFunction() {
    var x;
    if (confirm("Pick one") == true) {
        x = "You can't divide by zero";
    } else {
        x = "You can divide by zero";
    }
    document.getElementById("demo").innerHTML = x;
}

// No it's not okay -_-
