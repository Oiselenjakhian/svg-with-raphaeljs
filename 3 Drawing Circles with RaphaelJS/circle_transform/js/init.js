$(function(){
	var paper = Raphael('paper', 500, 500);
	
	// Draw a circle at the center of the viewport
	var circle = paper.circle(250, 250, 50);
	
	// Outline the circle 
	circle.attr({ 'stroke' : '#ff0000', 'stroke-width' : 10 });
	
	// Create a clone of the circle
	var circle_clone = circle.clone();
	
	// Transform the clone
	circle_clone.transform("T150, 0").attr({ 'stroke' : '#ff0000', 'stroke-width' : 10 });
});