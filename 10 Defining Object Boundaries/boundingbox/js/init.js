$(function(){
	var paper = Raphael('container', 500, 500);
	
	// Draw a circle at the left hand side of the viewport
	var circle = paper.circle(100, 250, 50).attr({ 'fill' : 'red', 'stroke-width' : 5 });
	
	// Get the bounding box of the circle
	var boundingBox = circle.getBBox();
	
	// Draw the rectangle using components from the bounding box
	paper.rect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);
	
	// Draw a circle at the left hand side of the viewport
	var circle1 = paper.circle(400, 250, 50).attr({ 'fill' : 'blue', 'stroke-width' : 5 });
	
	circle.drag(dragmove, dragstart, dragend);
			
	function dragstart(x, y, e){
		this.toFront();
		this.current_transform = this.transform();
		this.attr("fill", "yellow");
	}
	
	function dragmove(dx, dy, x, y, e){
		this.transform(this.current_transform+'T'+dx+','+dy)
	}
	
	function dragend(e){
		this.current_transform = this.transform();
		this.attr("fill", "red");
		
		// Get the bounding box for the target circle
		var targetBBox = circle1.getBBox
		
		/* Check if the bounding boxes intersect */
		if(Raphael.isBBoxIntersect(boundingBox, targetBBox)){
			alert("The bounding boxes intersect.");
		}
		else{
			alert("The bounding boxes intersect.");
		}
	}
});