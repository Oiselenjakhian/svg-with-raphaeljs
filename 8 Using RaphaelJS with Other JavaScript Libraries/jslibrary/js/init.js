$(function(){
	var paper = Raphael('container', 500, 500);
	
	// Draw a circle at the center of your canvas
	var circle = paper.circle(250, 250, 50);
	
	// Set the attributes of the circle
	circle.attr({ fill: "red", cursor: "pointer" });
	
	circle.node.id = "circle";
	
	$("#circle").click(function(){
		alert(1);
	});
	
	$(circle.node).qtip({ 
		content: { text: 'Hello. I am in the DOM' },
		style: {
			background: '#000000',
			color: '#ffffff',
			border: { width: 6, radius: 3, color: '#ff0000' }
		},
		position: {
			my: 'left center',
			at: 'bottom center',
			target: 'mouse',
			adjust: { x: 20, y: 25 }
		}
	});
	
	console.log(circle.node);
});