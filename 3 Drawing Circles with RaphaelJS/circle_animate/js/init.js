$(function(){
	var paper = Raphael('container', 500, 500);
	
	// Draw a circle at the center of the viewport
	var circle = paper.circle(250, 250, 50);
	
	// Outline the circle 
	circle.attr({ 'stroke' : '#ff0000', 'stroke-width' : 10 });
	
	/* Increase the circle to 3 times its size over 3 seconds */
	circle.animate({
		transform:"s3"
	}, 3000);
});