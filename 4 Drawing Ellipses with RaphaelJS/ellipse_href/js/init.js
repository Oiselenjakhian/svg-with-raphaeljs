$(function(){
	var paper = Raphael('container', 500, 500);
	
	var ellipse = paper.ellipse(250, 250, 100, 50).attr({
						"fill":"#FF0000",
						"stroke":"#FF0000",
						"stroke-width":2,
						"href": "http://trustondevcenary.com",
						"target": "blank"
					});
					
	/* ellipse.click(function(){
		document.location.href = "http://trustondevcenary.com";
	}); */
});