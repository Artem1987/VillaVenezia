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
$(document).ready(function(){
			$("#nav-container").removeClass("top-scroll");
			if(window.innerWidth > 800){
				$(window).scroll(function(){
					if ($(this).scrollTop() > 100) {
						$("#nav-container").addClass("top-scroll").fadeIn('slow');
					} else {
						$("#nav-container").removeClass("top-scroll").fadeIn('slow');
					};
				});
			}
		});
