$(function(){
	var paper = Raphael('paper', 500, 500);
	
	// Draw a circle at the center of the viewport
	var circle = paper.circle(250, 250, 50);
	
	// Style the circle
	circle.attr({ 'stroke' : '#ff0000', 'stroke-width' : 10 });
});