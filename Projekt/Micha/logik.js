// document.getElementById("samsung").style.display = "none";

function produktAnzeigen(nr) {
    if (nr === 1) {
        document.getElementById("iphone").style.display = "block";
        document.getElementById("samsung").style.display = "none";
    }
    else if (nr === 2) {
        document.getElementById("iphone").style.display = "none";
        document.getElementById("samsung").style.display = "block";
    }
}
