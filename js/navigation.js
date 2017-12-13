function menuResponsive() {
    var x = document.getElementById("nav-container");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}
function iconTransform(x) {
    x.classList.toggle("change");
}
