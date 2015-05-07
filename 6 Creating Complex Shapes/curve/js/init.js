$(function(){
	var paper = Raphael('container', 600, 600);
	
	var starting_point = paper.circle(100, 200, 5).attr({ fill: "green", stroke: 0 });
	var ending_point = paper.circle(500, 200, 5).attr({ fill: "green", stroke: 0 });
	var center_point = paper.circle(300, 400, 5).attr({ fill: "red", stroke: 0 });
	
	// For the A command, its parameters are (rx, ry, x axis-rotation, large-arc-flag, sweep-flag, x, y)
	var curve1 = paper.path("M100,200 A300,300 0,0,1 500,200").attr({"stroke-width": 5, stroke: "blue"});
});