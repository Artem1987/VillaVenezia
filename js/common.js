$(document).ready(function() {
	
	$("#mail").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("#mail").trigger("reset");
			$("#popup-page").fadeIn(400);
			setTimeout('location.replace("/index.php")', 2500);
		});
		return false;
	});
	
});