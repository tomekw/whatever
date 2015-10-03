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
